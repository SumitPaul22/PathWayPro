import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "../../../stack";

export default function Handler(props) {
  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh", width: "100%" }}>
      <StackHandler fullPage app={stackServerApp} routeProps={props} />
    </div>
  );
}
