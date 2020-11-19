import React, { useState, useEffect } from 'react';
import './MotherRegister.css';
import InputField from '../../components/inputField/index';

function MotherRegister() {
    const [existIdCard, setExistIdCard] = useState(false)
    // ค่าตั้งต้น  false เจอ true ไม่เจอ false
    const [value, setValue] = useState({})

    const valueGet = (fieldValue, field) => {
        setValue({ ...value, [field]: fieldValue })
    }
    return (
        <div className="page">
            <div className='pageBody'>
                <div style={{ width: "70%", minWidth: "250px" }}>
                    <InputField
                        fieldName='IdCard'
                        fieldLabel='รหัสประจำตัวประชาชน'
                        type='text'
                        valueGet={(value, field) => {
                            valueGet(value, field);
                            if (value.length === 13) {
                                alert("กรองว่ามี idCard ในฐานข้อมูลไหม ถ้ามี setExistIdCard(true)")
                            }
                        }}
                    />
                </div>
                <form className='card'>
                    {existIdCard === null ?
                        <p className="pageHeader"> ลงทะเบียนครรภ์ใหม่ </p>
                        : existIdCard ?
                            <div>
                                <div>
                                    <p className="message">เลขประจำตัวประชาชน {value.IdCard} เคยลงทะเบียนหญิงตั้งครรภ์ในระบบแล้ว</p>
                                    <p className="message">ชื่อ ... สกุล ...</p>
                                    <p className="alertMessage">ลงทะเบียนตั้งครรภ์ครั้งล่าสุดในปี...เดือน...(ยังไม่พบข้อมูลการคลอดหรือแท้ง)</p>
                                    <p className="message">กด "เพิ่มครรภ์ใหม่" หากต้องการยืนยันลงทะเบียนครรภ์ใหม่</p>
                                </div>
                            </div>
                            :
                            <div>
                                <InputField
                                    fieldName='FirstName'
                                    fieldLabel='ชื่อ'
                                    type='text'
                                    valueGet={(value, field) => valueGet(value, field)}
                                />
                                <InputField
                                    fieldName='LastName'
                                    fieldLabel='นามสกุล'
                                    type='text'
                                    valueGet={(value, field) => valueGet(value, field)}
                                />
                                <InputField
                                    fieldName='PhoneNumber'
                                    fieldLabel='เบอร์โทร'
                                    type='tel'
                                    valueGet={(value, field) => valueGet(value, field)}
                                />
                                <InputField
                                    fieldName='Email'
                                    fieldLabel='อีเมล'
                                    type='email'
                                    valueGet={(value, field) => valueGet(value, field)}
                                />
                            </div>
                    }
                </form>
            </div>
            <div className='pageDeco'>
                <div className='pageDecoLeft'>
                </div>
                <div className='pageDecoRight'>
                </div>
            </div>

            <div className='pageFooter'>
                {existIdCard === null ?
                    <div> ลงทะเบียนเพื่อเพิ่มข้อมูลการตั้งครรภ์ปัจจุบัน<br />
                    หลังกดส่งข้อมูล ครรภ์ใหม่จะถูกสร้างทันที<br />
                    กรอกบัตรประชาชน ระบบจะตรวจสอบว่าหญิงตั้งครรภ์เคยมีบัญชีไหม<br />
                    หากมารดามีบัญชีแล้ว ระบบจะแจ้งชื่อและข้อความเตือนอื่นๆในกล่อง <br />
                รบกวนตรวจสอบความถูกต้องก่อนส่งข้อมูล<br />
                หากมารดายังไม่เคยมีบัญชี กรอกข้อมูลให้ครบถ้วน<br />
                ระบบจะสร้างบัญชีมารดา และสร้างครรภ์ปัจจุบันให้ทันทีเมื่อส่งข้อมูล<br />
                รหัสผ่านเริ่มต้นคือ เลขประจำตัวประชาชน<br />
                ให้หญิงตั้งครภ์กรอกเปลี่ยนรหัส และกรอกประวัติด้วยตนเอง
                     </div>
                    : existIdCard ?
                        <div>
                            <button className="submitBtn">
                                ยกเลิกการลงทะเบียน
                        </button>
                            <button className="submitBtn">
                                เพิ่มครรภ์ใหม่
                        </button>
                        </div>
                        :
                        <div>
                            <button className="submitBtn">
                                ยกเลิกการลงทะเบียน
                        </button>
                            <button className="submitBtn">
                                ลงทะเบียนหญิงตั้งครรภ์ และ เพิ่มครรภ์ใหม่
                        </button>
                        </div>
                }


            </div>
        </div>
    )
}

export default MotherRegister
