
import UserForm from '../components/UserForm'
import UploadAvatar from '../components/UploadAvatar';

function Settings({data}) {
    return (
        <section className="container">
            <h1 className='text-center'>Настройки</h1>
            <h2>Настройки профиля</h2>
            <UploadAvatar data={data}/>
            <UserForm
              data={data}
            />
        </section>
    );
}

export default Settings;