import './button.scss';

export default function Button (props) {
  const clazz = [
    'button',
    props.className
  ]
  return (
    <button
    onClick={props.onClick}
    className={clazz.join(' ')}
    disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}