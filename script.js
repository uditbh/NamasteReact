const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const heading = React.createElement("h1", { id: 'custom-heading' }, "Namaste React");
root.render(heading)