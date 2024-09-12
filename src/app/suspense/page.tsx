import ErrorBoundary from "@/components/ErrorBoundary";
import { Suspense } from "react";
import CardError from "./_components/CardError";
import CardLoading from "./_components/CardLoading";
import ComponentOne from "./_components/ComponentOne";
import ComponentTwo from "./_components/ComponentTwo";

export default function page() {
  return (
    <div className="max-w-7xl mx-auto flex gap-5">
      <ErrorBoundary fallback={<CardError />}>
        <Suspense fallback={<CardLoading />}>
          <ComponentOne />
        </Suspense>
      </ErrorBoundary>
      <Suspense fallback={<CardLoading />}>
        <ComponentTwo />
      </Suspense>
    </div>
  );
}
