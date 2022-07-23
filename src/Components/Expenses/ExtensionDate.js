import './ExtensionDate.css';

function ExtensionDate(props)
{
    const Month = props.date.toLocaleString('en-US', {month: "long"});
    const Day = props.date.toLocaleString('en-US',{day: "2-digit"});
    const Year = props.date.getFullYear();

    return (
        <div className='Extension-date'>
            <div className='Extension-date__month'>{Month}</div>
            <div className='Extension-date__year'>{Year}</div>
            <div className='Extension-date__day'>{Day}</div>
        </div>
    );
}

export default ExtensionDate;