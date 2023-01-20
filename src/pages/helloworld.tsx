import React from "react";
import Link from "next/link";

export default function helloworld() {
  return (
    <>
      <div>HelloWorld</div>
      <Link href="/">Back to Home</Link>
    </>
  );
}
