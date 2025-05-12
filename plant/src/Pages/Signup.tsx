import { SignupForm } from "@/components/SignUp-form";
import { GalleryVerticalEnd } from "lucide-react";

export default function SignPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* 👉 Left Side Image */}
      <div className="relative hidden bg-muted lg:block">
        <img
          src="https://m.media-amazon.com/images/M/MV5BYWVjODZjNDgtYjk4ZS00OTg5LTg5NDQtZDMxZDQ4ZmM5MGJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2]"
        />
      </div>

      {/* 👉 Right Side Signup */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
}
