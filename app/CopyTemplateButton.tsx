"use client";

import { useState } from "react";

export function CopyTemplateButton({ text }: { text: string }) {
  const [copied,setCopied] = useState(false);
  async function copy(){ await navigator.clipboard.writeText(text); setCopied(true); window.setTimeout(()=>setCopied(false),1800); }
  return <button className="button primary" type="button" onClick={copy}>{copied?"Copied":"Copy template"}</button>;
}
