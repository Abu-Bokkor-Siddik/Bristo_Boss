

const SectionTitle = ({heading,subheading}) => {
  return (
    <div>
      <p className="text-[#D99904] text-center border-b-8 w-3/12 py-5 mx-auto my-7">{heading}</p>
      <h1 className="text-center text-5xl border-b-8 max-w-[600px] mx-auto pb-8 my-7">{subheading}</h1>
    </div>
  )
}

export default SectionTitle
