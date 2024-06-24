import { Marp } from "@marp-team/marp-core";
import textualUML from "markdown-it-textual-uml";
import markdownInclude from "markdown-it-include";

export default function (opts) {
  opts["html"] = true;

  const marp = new Marp(opts);
  marp.use(textualUML).use(markdownInclude);

  return marp;
}
