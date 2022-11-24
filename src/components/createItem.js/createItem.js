import CreateItemsForm from './createItemForm';
function CreateItems(props) {
    return ( 
        <header className='mt-5'>
            <div className='container'>
                <h1><span color='blue'>&lt;</span>Country<span className="blue">&gt;</span> <span className="yellow">Data</span></h1>
                <CreateItemsForm isValid = {props.isValid}  userData = {props.userData}/>
            </div>
        </header>
     );
}
export default CreateItems;