// OAuth.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { SignInSuccess } from "@/lib/features/user/userSlice";
import { useRouter } from "next/navigation";

export default function OAuth() {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      console.log(resultsFromGoogle);
      //   const res = await fetch("/auth/google", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({
      //       name: resultsFromGoogle.user.displayName,
      //       email: resultsFromGoogle.user.email,
      //       googlePhotoUrl: resultsFromGoogle.user.photoURL,
      //     }),
      //   });

      const data = await res.json();
      if (res.ok) {
        dispatch(SignInSuccess(data));
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      type="button"
      className="flex items-center p-2 bg-green-500 text-white rounded-md"
      onClick={handleGoogleClick}
    >
      <FontAwesomeIcon icon={faGoogle} className="w-6 h-6 mr-2" />
      Continue with Google
    </button>
  );
}
