function Form( { handleChange, handleSubmit }) {

    return ( 
    <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name1" className="label-name">Название</label>
        <input id="name1" className="input-name" defaultValue="" type="text" name="name" required placeholder="Город" onChange={handleChange} />

        <label htmlFor="timeZone" className="label-timezone">Часовой пояс</label>
        <input id="timeZone" className="input-timezone" type="number" name="timeZone" defaultValue="" required placeholder="введите значение" onChange={handleChange}/>

        <button className="btn-submit" >Добавить</button>
    </form>    
    );
}

export default Form;