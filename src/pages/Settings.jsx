/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */

import React from 'react'
import { CButton } from '@coreui/react'

export default function Settings() {
    return (
        <div className='textbox'>
            <h2>設定</h2>
            <form action='/settings' method='POST'>
                <div>
                    <h3>現在の画像</h3>
                    <img src='success.png' alt='ユーザー画像' />
                </div>
                <div>
                    <label for="name">名前:</label>
                    <input type="text" id='name' name='name'></input>
                </div>
                <div>
                    <label for="description">一言:</label>
                    <input type="text" id='description' name='description'></input>
                </div>
                <div>
                    <label for="image">画像:</label>
                    <input type="file" id='image' name='image'></input>
                </div>
                <CButton color="secondary" style={{width: '40%'}}>更新</CButton>
            </form>
        </div>
    )
}
