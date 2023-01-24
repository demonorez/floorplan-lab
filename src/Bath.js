function Bath(props) {
  return (
    <div className="bathroom" id={`bath-${props.size}`}>
      <h3>{props.size} Bath</h3>
    </div>
  )
}

export default Bath