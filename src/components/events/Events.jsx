import EventBox from "./EventBox";

const getEvents = async () => {
    const res = await fetch('http://localhost:4000/events');
    return res.json();
}
const Events = async () => {
    const events = await getEvents();
    console.log(events)
    return(
        <section className="section" id="tours">
            <div className="container mx-auto">
                <EventBox events={events}a />
            </div>
        </section>
    )
};
export default Events;