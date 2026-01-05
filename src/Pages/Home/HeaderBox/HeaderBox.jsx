export default function HeaderBox({src}) {
  return (
    <div className={`w-5/6 h-32 bg-cover`} style={{backgroundImage:`url('${src}')`}}>
    </div>
  )
}
