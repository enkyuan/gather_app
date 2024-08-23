// TODO: check if routes/events is valid
// TODO: check if username, password auth is valid
// TODO: implement 3rd-party auth w facbook & google

import pb from "@/pb.config";
import { useRouter } from "expo-router";

const AuthProvider = () => {
  const router = useRouter();
  const nameRegex = new RegExp("/^[a-zA-Z][0-9]{7}/");
  const emailRegex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );

  async function isValidUsername(username: string) {
    const collection = "users";
    const filter = `name="${username}"`;

    const records = await pb.collection(collection).getList(1, 1, { filter });

    return records.totalItems === 0;
  }

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
    alias: string,
    email: string,
    password: string,
    passwordConfirm: string,
  ) {
    const match = nameRegex.exec(email);
    // TODO: obtain username from regex
    const data = {
      alias: alias,
      email: email,
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

    console.log(alias, data);
  }

  async function handleSignIn(input: string, password: string) {
    try {
      let authData;

      if (isValidEmail(input)) {
        authData = await pb
          .collection("users")
          .authWithPassword(input, password);
      } else {
        const filter = `username="${input}"`;
        const records = await pb.collection("users").getList(1, 1, { filter });

        if (records.totalItems === 0) {
          throw new Error("Invalid username or email.");
        }

        const user = records.items[0];
        authData = await pb
          .collection("users")
          .authWithPassword(user.email, password);
      }

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
    isValidUsername,
    isValidEmail,
    isValidPassword,
    handleSignUp,
    handleSignIn,
    handleSignOut,
  };
};

export default AuthProvider;
