const Page = ({ data }) => {
  return (
    <div className='grid-col-1 grid-row-5 grid items-start justify-center gap-6 text-center'>
      <img
        src='https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
        className='row-span-1 row-start-1 object-fill'
      />
      <h1 className=' text-3xl font-medium'>{data.projectName}</h1>
      <p className=' text-slate-50 '>{data.projectDesc}</p>
      {data.link ? (
        <a
          href={data.link}
          className='justify-self-center rounded-xl border border-slate-50/50 p-1 px-2  text-lg'
        >
          Live
        </a>
      ) : (
        ''
      )}
    </div>
  );
};

export default Page;
