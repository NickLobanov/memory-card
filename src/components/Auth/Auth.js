import React from "react";

const Auth = () => {
    return (
        <form>
            <label>Введите имя пользователя</label>
            <input type='text' required />

            <button>Сохранить</button>
        </form>
    )
}

export default Auth