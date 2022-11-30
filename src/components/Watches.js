import { useState, useEffect, useRef } from "react";
import { format } from "date-fns";
import shortid from "shortid";
import Form from "./Form";
import WatchCard from "./WatchCard";

function Watches() {
    const [data, setData] = useState({});
    const [time, setTime] = useState(null);
    const [watches, setWatches] = useState([]);

    const idInterval = useRef;

    useEffect(() => {
        idInterval.current = setInterval(() => setTime(new Date()), 1000);
    }, [time]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData((prev) => ({...prev, [name]:value}));     
    };

    const validateValue = () => {
        if (data.name.trim().length && (Number(data.timeZone) > 0) && (Number(data.timeZone) <= 12)) {
            return data;
        } else {
            alert("Введите корректный часовой пояс!!!");
        }
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateValue() && setWatches((prev) => [...prev, {...data, id: shortid.generate()}]);
        e.target.reset();
        setData({});
    };

    const handleRemove = (idItem) => {
        setWatches(() => watches.filter(({ id }) => id !== idItem));
      };

    console.log(watches);

    return ( 
    <div className="container">
        <Form handleChange={handleChange} handleSubmit={handleSubmit}/>
        <div>
            <div className="local-watch">Местное время: {format(new Date(), "HH:mm:ss")}</div>
            <div className="container-watches">{watches.map(({ name, timeZone, id }) => (
                <WatchCard handleRemove={handleRemove} timeZone={timeZone} id={id} name={name} key={id} />
            ))}
            </div>
        </div>
    </div>
  );
};

export default Watches;