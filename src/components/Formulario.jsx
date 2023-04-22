import Header from './Header'


const Formulario = () => {
  return (
    <section className='formulario'>
        <Header />
        <form action="">
            <section>
                <label htmlFor="nombre">Nombre</label>
                <input id='nombre' type="text" />
            </section>
            <section>
                <label htmlFor="apellido">Apellido</label>
                <input id='apellido' type="text" />
            </section>
            <section>
                <label htmlFor="documento">Documento</label>
                <input id='documento' type="text" />
            </section>
        </form>
    </section>
  )
}

export default Formulario