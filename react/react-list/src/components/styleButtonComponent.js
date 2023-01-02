
function StyleButtonComponent(props) {
  const { type, label, icon } = props;

  function getClasses() {
    let classes = 'btn';
    if(type === 'primary') {
      classes += ' primary-btn';
    } else if(type === 'normal'){
      classes += ' normal-btn';
    } else if(type === 'danger') {
      classes += ' danger-btn'
    } else {
      classes = '';
    }
    return classes;
  }
  // function renderIcon() {
  //   if(icon){
  //     return <span>{icon}</span>
  //   }
  //   return null;
  // }
  return (
    <button className={getClasses()}>
      {/* {renderIcon()} */}
      {icon && <span>{icon}</span>}
      {label}
    </button>
  )
}

export default StyleButtonComponent;