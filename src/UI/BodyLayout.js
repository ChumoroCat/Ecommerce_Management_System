import style from "./BodyLayout.module.css";

export default function BodyLayout(props) {
  return <div className={style.main}>{props.children}</div>;
}
