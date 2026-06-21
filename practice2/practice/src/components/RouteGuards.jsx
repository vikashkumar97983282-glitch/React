import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { checkAuth } from "../utils/auth";

function GuardLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="rounded-lg bg-white px-6 py-4 text-sm font-medium text-gray-600 shadow-sm">
        Checking session...
      </div>
    </div>
  );
}

export function RequireAuth() {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    let isMounted = true;

    const verifyAuth = async () => {
      try {
        await checkAuth();
        if (isMounted) {
          setStatus("authenticated");
        }
      } catch (error) {
        if (isMounted) {
          setStatus("unauthenticated");
        }
      }
    };

    verifyAuth();

    return () => {
      isMounted = false;
    };
  }, []);

  if (status === "checking") {
    return <GuardLoader />;
  }

  if (status === "unauthenticated") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export function PublicOnlyRoute() {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    let isMounted = true;

    const verifyAuth = async () => {
      try {
        await checkAuth();
        if (isMounted) {
          setStatus("authenticated");
        }
      } catch (error) {
        if (isMounted) {
          setStatus("unauthenticated");
        }
      }
    };

    verifyAuth();

    return () => {
      isMounted = false;
    };
  }, []);

  if (status === "checking") {
    return <GuardLoader />;
  }

  if (status === "authenticated") {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}
