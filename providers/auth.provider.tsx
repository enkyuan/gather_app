import pb from "@/pb.config";
import { useRouter } from "expo-router";
import AppOnboarding from "@/app/routes/auth/AppOnboarding";

const AuthProvider = () => {
  const router = useRouter();
  const nameRegex = new RegExp("/^[a-zA-Z][0-9]{7}/");
  const emailRegex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );

  function isValidEmail(email: string) {
    if (emailRegex.test(email) === true) {
      return true;
    }

    alert("Invalid email");
    console.log(email);

    return false;
  }

  function isValidPassword(password: string, passwordConfirm: string) {
    if (password !== passwordConfirm) {
      alert("Passwords do not match");
      return false;
    } else if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return false;
    }
    console.log(password, passwordConfirm);

    return true;
  }

  async function handleSignUp(
    email: string,
    password: string,
    passwordConfirm: string,
  ) {
    const match = nameRegex.exec(email);
    // TODO: obtain username from regex
    const username = match ? match[1] : "";
    const data = {
      email: email,
      username: username,
      password: password,
      passwordConfirm: passwordConfirm,
    };

    if (isValidEmail(email) && isValidPassword(password, passwordConfirm)) {
      try {
        await pb.collection("users").create(data);
        router.navigate("/routes/auth/AppOnboarding");
      } catch (error: any) {
        alert(error.message);
      }
    }

    console.log(username, data);
  }

  async function handleSignIn(email: string, password: string) {
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(email, password);
      router.navigate("/routes/events");
      return authData;
    } catch (error: any) {
      alert(error.message);

      if (error.message.toString() === "Failed to authenticate.") {
        router.navigate("/routes/auth/Login");
      }
    }
  }

  async function handleSignOut() {
    pb.authStore.clear();
    router.navigate("/routes/auth/Login");
  }

  return {
    isValidEmail,
    isValidPassword,
    handleSignUp,
    handleSignIn,
    handleSignOut,
  };
};

export default AuthProvider;
