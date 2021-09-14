import DasboardCard from "../component/card/DasboardCard";

const Dasboard = () => {
    return (
        <div>
            <DasboardCard quantity={0} title='Today Premium User' />
            <DasboardCard quantity={1} title='Today Premium User' />
            <DasboardCard quantity={0} title='Today Free User' />
            <DasboardCard quantity={0} title='Today Free User' />
            <DasboardCard quantity={0} title='Today Active Premium' />
            <DasboardCard quantity={0} title='Today Active Premium' />
            <DasboardCard quantity={0} title='Today Active Test' />
            <DasboardCard quantity={0} title='Today Active Test' />
            <DasboardCard quantity={0} title='Today Sell Amount' />
            <DasboardCard quantity={0} title='Today Sell Amount' />
            <DasboardCard quantity={0} title='Today Due Amount' />
            <DasboardCard quantity={0} title='Today Due Amount' />
        </div>
    );
};

export default Dasboard;