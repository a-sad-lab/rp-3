export function BigList({fn}) {
  console.log(`render BigList`)
  const source = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  const items = source.map(item => (
    <p onClick={fn} key={item}>{item}</p>
  ))
  
  return (
    <div>
      {items}
    </div>
  )
}
