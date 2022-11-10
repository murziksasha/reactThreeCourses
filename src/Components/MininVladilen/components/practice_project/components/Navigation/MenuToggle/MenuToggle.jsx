import './menuToggle.scss';

export default function MenuToggle(props) {
  const clazz = [
    'menuToggle',
    'fa',
  ]
  if(props.isOpen) {
    clazz.push('fa-times open')
  } else {
    clazz.push('fa-bars')
  }
  return(
    <i 
    className={clazz.join(' ')}
    onClick={props.onToggle}
    />
  )
}