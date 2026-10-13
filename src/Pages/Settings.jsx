
import UserForm from '../components/UserForm'

function Settings({data}) {
    return (
        <section className="container">
            <h1 className='text-center'>Настройки</h1>
            <h2>Настройки профиля</h2>
            <UserForm
              data={data}
            />
        </section>
    );
}

export default Settings;