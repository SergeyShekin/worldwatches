import { format, addHours} from "date-fns";

function WatchCard({ id, name, timeZone, handleRemove }) {
    return ( 
    <div className="watch-card">
        <i className="titleWatch">{name}</i>
        <i className="dataWatch">{format(addHours(new Date(), (timeZone-2)), "HH:mm:ss")}</i>
        <button onClick={() => handleRemove(id)}>удалить</button>
    </div>    
    );
}

export default WatchCard;