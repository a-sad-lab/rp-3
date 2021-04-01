export function BigList() {
  console.log(`render big list`)
  const click = e => {
    console.log(e.target.textContent)
  }
  const items = [0, 1, 2, 3, 4, 5].map(item => (
    <p onClick={click} key={item}>{item}</p>
  ))
  return (
    <div>
      {items}
    </div>
  )
}
