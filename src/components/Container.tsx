import { Content } from "./Content";
import { SideBar } from "./SideBar";

export function Container() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar />

      <Content />
    </div>
  )
}