import { Button, Col, Form, Row, Typography, notification } from 'antd';
import React from 'react';
import Risk from './component/Risk';
import axios from '../../config/axios.js';

function RiskEvaluation() {
  const { Title } = Typography;

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  // History
  const [infantDied, setInfantDied] = React.useState(null);
  const [aborts, setAborts] = React.useState(null);
  const [weight_2500, setWeight_2500] = React.useState(null);
  const [weight_4000, setWeight_4000] = React.useState(null);
  const [toxicPregnant, setToxicPregnant] = React.useState(null);
  const [reproductiveSystem, setReproductiveSystem] = React.useState(null);

  console.log('infantDied', infantDied);
  console.log('aborts', aborts);
  console.log('weight_2500', weight_2500);
  console.log('weight_4000', weight_4000);
  console.log('toxicPregnant', toxicPregnant);
  console.log('reproductiveSystem', reproductiveSystem);

  // onchangeHistory

  const onChangeHistory = (e) => {
    if (e.target.name === 'infantDied') {
      setInfantDied(e.target.value);
    } else if (e.target.name === 'aborts') {
      setAborts(e.target.value);
    } else if (e.target.name === 'weight_2500') {
      setWeight_2500(e.target.value);
    } else if (e.target.name === 'weight_4000') {
      setWeight_4000(e.target.value);
    } else if (e.target.name === 'toxicPregnant') {
      setToxicPregnant(e.target.value);
    } else if (e.target.name === 'reproductiveSystem') {
      setReproductiveSystem(e.target.value);
    }
  };

  //Present

  const [twinPregnancy, setTwinPregnancy] = React.useState([]);
  const [age_17_edc, setAge_17_edc] = React.useState([]);
  const [age_35_edc, setAge_35_edc] = React.useState([]);
  const [rhNegative, setRhNegative] = React.useState([]);
  const [vaginalBleeding, setVaginalBleeding] = React.useState([]);
  const [pelvicLump, setPelvicLump] = React.useState([]);
  const [diastolic_90, setDiastolic_90] = React.useState([]);
  const [Bmi, setBmi] = React.useState([]);

  console.log('twinPregnancy', twinPregnancy);
  console.log('age_17_edc', age_17_edc);
  console.log('age_35_edc', age_35_edc);
  console.log('rhNegative', rhNegative);
  console.log('vaginalBleeding', vaginalBleeding);
  console.log('pelvicLump', pelvicLump);
  console.log('diastolic_90', diastolic_90);
  console.log('Bmi', Bmi);

  //onChangePresent

  const onChangePresent = (e) => {
    console.log(e.target);
    if (e.target.name === 'twinPregnancy-0') {
      const twinPregnancy_0 = [...twinPregnancy];
      twinPregnancy_0[0] = e.target.value;
      setTwinPregnancy(twinPregnancy_0);
    } else if (e.target.name === 'twinPregnancy-1') {
      const twinPregnancy_1 = [...twinPregnancy];
      twinPregnancy_1[1] = e.target.value;
      setTwinPregnancy(twinPregnancy_1);
    } else if (e.target.name === 'twinPregnancy-2') {
      const twinPregnancy_2 = [...twinPregnancy];
      twinPregnancy_2[2] = e.target.value;
      setTwinPregnancy(twinPregnancy_2);
    } else if (e.target.name === 'twinPregnancy-3') {
      const twinPregnancy_3 = [...twinPregnancy];
      twinPregnancy_3[3] = e.target.value;
      setTwinPregnancy(twinPregnancy_3);
    } else if (e.target.name === 'twinPregnancy-4') {
      const twinPregnancy_4 = [...twinPregnancy];
      twinPregnancy_4[4] = e.target.value;
      setTwinPregnancy(twinPregnancy_4);
    } else if (e.target.name === 'age_17_edc-0') {
      const age_17_edc_0 = [...age_17_edc];
      age_17_edc_0[0] = e.target.value;
      setAge_17_edc(age_17_edc_0);
    } else if (e.target.name === 'age_17_edc-1') {
      const age_17_edc_1 = [...age_17_edc];
      age_17_edc_1[1] = e.target.value;
      setAge_17_edc(age_17_edc_1);
    } else if (e.target.name === 'age_17_edc-2') {
      const age_17_edc_2 = [...age_17_edc];
      age_17_edc_2[2] = e.target.value;
      setAge_17_edc(age_17_edc_2);
    } else if (e.target.name === 'age_17_edc-3') {
      const age_17_edc_3 = [...age_17_edc];
      age_17_edc_3[3] = e.target.value;
      setAge_17_edc(age_17_edc_3);
    } else if (e.target.name === 'age_17_edc-4') {
      const age_17_edc_4 = [...age_17_edc];
      age_17_edc_4[4] = e.target.value;
      setAge_17_edc(age_17_edc_4);
    } else if (e.target.name === 'age_35_edc-0') {
      const age_35_edc_0 = [...age_35_edc];
      age_35_edc_0[0] = e.target.value;
      setAge_35_edc(age_35_edc_0);
    } else if (e.target.name === 'age_35_edc-1') {
      const age_35_edc_1 = [...age_35_edc];
      age_35_edc_1[1] = e.target.value;
      setAge_35_edc(age_35_edc_1);
    } else if (e.target.name === 'age_35_edc-2') {
      const age_35_edc_2 = [...age_35_edc];
      age_35_edc_2[2] = e.target.value;
      setAge_35_edc(age_35_edc_2);
    } else if (e.target.name === 'age_35_edc-3') {
      const age_35_edc_3 = [...age_35_edc];
      age_35_edc_3[3] = e.target.value;
      setAge_35_edc(age_35_edc_3);
    } else if (e.target.name === 'age_35_edc-4') {
      const age_35_edc_4 = [...age_35_edc];
      age_35_edc_4[4] = e.target.value;
      setAge_35_edc(age_35_edc_4);
    } else if (e.target.name === 'rhNegative-0') {
      const rhNegative_0 = [...rhNegative];
      rhNegative_0[0] = e.target.value;
      setRhNegative(rhNegative_0);
    } else if (e.target.name === 'rhNegative-1') {
      const rhNegative_1 = [...rhNegative];
      rhNegative_1[1] = e.target.value;
      setRhNegative(rhNegative_1);
    } else if (e.target.name === 'rhNegative-2') {
      const rhNegative_2 = [...rhNegative];
      rhNegative_2[2] = e.target.value;
      setRhNegative(rhNegative_2);
    } else if (e.target.name === 'rhNegative-3') {
      const rhNegative_3 = [...rhNegative];
      rhNegative_3[3] = e.target.value;
      setRhNegative(rhNegative_3);
    } else if (e.target.name === 'rhNegative-4') {
      const rhNegative_4 = [...rhNegative];
      rhNegative_4[4] = e.target.value;
      setRhNegative(rhNegative_4);
    } else if (e.target.name === 'vaginalBleeding-0') {
      const vaginalBleeding_0 = [...vaginalBleeding];
      vaginalBleeding_0[0] = e.target.value;
      setVaginalBleeding(vaginalBleeding_0);
    } else if (e.target.name === 'vaginalBleeding-1') {
      const vaginalBleeding_1 = [...vaginalBleeding];
      vaginalBleeding_1[1] = e.target.value;
      setVaginalBleeding(vaginalBleeding_1);
    } else if (e.target.name === 'vaginalBleeding-2') {
      const vaginalBleeding_2 = [...vaginalBleeding];
      vaginalBleeding_2[2] = e.target.value;
      setVaginalBleeding(vaginalBleeding_2);
    } else if (e.target.name === 'vaginalBleeding-3') {
      const vaginalBleeding_3 = [...vaginalBleeding];
      vaginalBleeding_3[3] = e.target.value;
      setVaginalBleeding(vaginalBleeding_3);
    } else if (e.target.name === 'vaginalBleeding-4') {
      const vaginalBleeding_4 = [...vaginalBleeding];
      vaginalBleeding_4[4] = e.target.value;
      setVaginalBleeding(vaginalBleeding_4);
    } else if (e.target.name === 'pelvicLump-0') {
      const pelvicLump_0 = [...pelvicLump];
      pelvicLump_0[0] = e.target.value;
      setPelvicLump(pelvicLump_0);
    } else if (e.target.name === 'pelvicLump-1') {
      const pelvicLump_1 = [...pelvicLump];
      pelvicLump_1[1] = e.target.value;
      setPelvicLump(pelvicLump_1);
    } else if (e.target.name === 'pelvicLump-2') {
      const pelvicLump_2 = [...pelvicLump];
      pelvicLump_2[2] = e.target.value;
      setPelvicLump(pelvicLump_2);
    } else if (e.target.name === 'pelvicLump-3') {
      const pelvicLump_3 = [...pelvicLump];
      pelvicLump_3[3] = e.target.value;
      setPelvicLump(pelvicLump_3);
    } else if (e.target.name === 'pelvicLump-4') {
      const pelvicLump_4 = [...pelvicLump];
      pelvicLump_4[4] = e.target.value;
      setPelvicLump(pelvicLump_4);
    } else if (e.target.name === 'diastolic_90-0') {
      const diastolic_90_0 = [...diastolic_90];
      diastolic_90_0[0] = e.target.value;
      setDiastolic_90(diastolic_90_0);
    } else if (e.target.name === 'diastolic_90-1') {
      const diastolic_90_1 = [...diastolic_90];
      diastolic_90_1[1] = e.target.value;
      setDiastolic_90(diastolic_90_1);
    } else if (e.target.name === 'diastolic_90-2') {
      const diastolic_90_2 = [...diastolic_90];
      diastolic_90_2[2] = e.target.value;
      setDiastolic_90(diastolic_90_2);
    } else if (e.target.name === 'diastolic_90-3') {
      const diastolic_90_3 = [...diastolic_90];
      diastolic_90_3[3] = e.target.value;
      setDiastolic_90(diastolic_90_3);
    } else if (e.target.name === 'diastolic_90-4') {
      const diastolic_90_4 = [...diastolic_90];
      diastolic_90_4[4] = e.target.value;
      setDiastolic_90(diastolic_90_4);
    } else if (e.target.name === 'Bmi-0') {
      const Bmi_0 = [...Bmi];
      Bmi_0[0] = e.target.value;
      setBmi(Bmi_0);
    } else if (e.target.name === 'Bmi-1') {
      const Bmi_1 = [...Bmi];
      Bmi_1[1] = e.target.value;
      setBmi(Bmi_1);
    } else if (e.target.name === 'Bmi-2') {
      const Bmi_2 = [...Bmi];
      Bmi_2[2] = e.target.value;
      setBmi(Bmi_2);
    } else if (e.target.name === 'Bmi-3') {
      const Bmi_3 = [...Bmi];
      Bmi_3[3] = e.target.value;
      setBmi(Bmi_3);
    } else if (e.target.name === 'Bmi-4') {
      const Bmi_4 = [...Bmi];
      Bmi_4[4] = e.target.value;
      setBmi(Bmi_4);
    }
  };

  // medicine

  const [isAnemia, setIsAnemia] = React.useState([]);
  const [isDiabetes, setIsDiabetes] = React.useState([]);
  const [isKidney, setIsKidney] = React.useState([]);
  const [isHeart, setIsHeart] = React.useState([]);
  const [isSmoke, setIsSmoke] = React.useState([]);
  const [isMedicalDiseases, setIsMedicalDiseases] = React.useState([]);
  const [other, setOther] = React.useState([]);
  const [comment, setComment] = React.useState([]);
  const [name, setName] = React.useState([]);
  const [date, setDate] = React.useState([]);

  console.log('isAnemia', isAnemia);
  console.log('isDiabetes', isDiabetes);
  console.log('isKidney', isKidney);
  console.log('isKidney', isKidney);
  console.log('isHeart', isHeart);
  console.log('isSmoke', isSmoke);
  console.log('isMedicalDiseases', isMedicalDiseases);
  console.log('other', other);
  console.log('comment', comment);
  console.log('name', name);
  console.log('date', date);

  // onChangeMedicine

  const onChangeMedicine = (e) => {
    console.log(e.target);
    if (e.target.name === 'isAnemia-0') {
      const isAnemia_0 = [...isAnemia];
      isAnemia_0[0] = e.target.value;
      setIsAnemia(isAnemia_0);
    } else if (e.target.name === 'isAnemia-1') {
      const isAnemia_1 = [...isAnemia];
      isAnemia_1[1] = e.target.value;
      setIsAnemia(isAnemia_1);
    } else if (e.target.name === 'isAnemia-2') {
      const isAnemia_2 = [...isAnemia];
      isAnemia_2[2] = e.target.value;
      setIsAnemia(isAnemia_2);
    } else if (e.target.name === 'isAnemia-3') {
      const isAnemia_3 = [...isAnemia];
      isAnemia_3[3] = e.target.value;
      setIsAnemia(isAnemia_3);
    } else if (e.target.name === 'isAnemia-4') {
      const isAnemia_4 = [...isAnemia];
      isAnemia_4[4] = e.target.value;
      setIsAnemia(isAnemia_4);
    } else if (e.target.name === 'isDiabetes-0') {
      const isDiabetes_0 = [...isDiabetes];
      isDiabetes_0[0] = e.target.value;
      setIsDiabetes(isDiabetes_0);
    } else if (e.target.name === 'isDiabetes-1') {
      const isDiabetes_1 = [...isDiabetes];
      isDiabetes_1[1] = e.target.value;
      setIsDiabetes(isDiabetes_1);
    } else if (e.target.name === 'isDiabetes-2') {
      const isDiabetes_2 = [...isDiabetes];
      isDiabetes_2[2] = e.target.value;
      setIsDiabetes(isDiabetes_2);
    } else if (e.target.name === 'isDiabetes-3') {
      const isDiabetes_3 = [...isDiabetes];
      isDiabetes_3[3] = e.target.value;
      setIsDiabetes(isDiabetes_3);
    } else if (e.target.name === 'isDiabetes-4') {
      const isDiabetes_4 = [...isDiabetes];
      isDiabetes_4[4] = e.target.value;
      setIsDiabetes(isDiabetes_4);
    } else if (e.target.name === 'isKidney-0') {
      const isKidney_0 = [...isKidney];
      isKidney_0[0] = e.target.value;
      setIsKidney(isKidney_0);
    } else if (e.target.name === 'isKidney-1') {
      const isKidney_1 = [...isKidney];
      isKidney_1[1] = e.target.value;
      setIsKidney(isKidney_1);
    } else if (e.target.name === 'isKidney-2') {
      const isKidney_2 = [...isKidney];
      isKidney_2[2] = e.target.value;
      setIsKidney(isKidney_2);
    } else if (e.target.name === 'isKidney-3') {
      const isKidney_3 = [...isKidney];
      isKidney_3[3] = e.target.value;
      setIsKidney(isKidney_3);
    } else if (e.target.name === 'isKidney-4') {
      const isKidney_4 = [...isKidney];
      isKidney_4[4] = e.target.value;
      setIsKidney(isKidney_4);
    } else if (e.target.name === 'isHeart-0') {
      const isHeart_0 = [...isHeart];
      isHeart_0[0] = e.target.value;
      setIsHeart(isHeart_0);
    } else if (e.target.name === 'isHeart-1') {
      const isHeart_1 = [...isHeart];
      isHeart_1[1] = e.target.value;
      setIsHeart(isHeart_1);
    } else if (e.target.name === 'isHeart-2') {
      const isHeart_2 = [...isHeart];
      isHeart_2[2] = e.target.value;
      setIsHeart(isHeart_2);
    } else if (e.target.name === 'isHeart-3') {
      const isHeart_3 = [...isHeart];
      isHeart_3[3] = e.target.value;
      setIsHeart(isHeart_3);
    } else if (e.target.name === 'isHeart-4') {
      const isHeart_4 = [...isHeart];
      isHeart_4[4] = e.target.value;
      setIsHeart(isHeart_4);
    } else if (e.target.name === 'isSmoke-0') {
      const isSmoke_0 = [...isSmoke];
      isSmoke_0[0] = e.target.value;
      setIsSmoke(isSmoke_0);
    } else if (e.target.name === 'isSmoke-1') {
      const isSmoke_1 = [...isSmoke];
      isSmoke_1[1] = e.target.value;
      setIsSmoke(isSmoke_1);
    } else if (e.target.name === 'isSmoke-2') {
      const isSmoke_2 = [...isSmoke];
      isSmoke_2[2] = e.target.value;
      setIsSmoke(isSmoke_2);
    } else if (e.target.name === 'isSmoke-3') {
      const isSmoke_3 = [...isSmoke];
      isSmoke_3[3] = e.target.value;
      setIsSmoke(isSmoke_3);
    } else if (e.target.name === 'isSmoke-4') {
      const isSmoke_4 = [...isSmoke];
      isSmoke_4[4] = e.target.value;
      setIsSmoke(isSmoke_4);
    } else if (e.target.name === 'isMedicalDiseases-0') {
      const isMedicalDiseases_0 = [...isMedicalDiseases];
      isMedicalDiseases_0[0] = e.target.value;
      setIsMedicalDiseases(isMedicalDiseases_0);
    } else if (e.target.name === 'isMedicalDiseases-1') {
      const isMedicalDiseases_1 = [...isMedicalDiseases];
      isMedicalDiseases_1[1] = e.target.value;
      setIsMedicalDiseases(isMedicalDiseases_1);
    } else if (e.target.name === 'isMedicalDiseases-2') {
      const isMedicalDiseases_2 = [...isMedicalDiseases];
      isMedicalDiseases_2[2] = e.target.value;
      setIsMedicalDiseases(isMedicalDiseases_2);
    } else if (e.target.name === 'isMedicalDiseases-3') {
      const isMedicalDiseases_3 = [...isMedicalDiseases];
      isMedicalDiseases_3[3] = e.target.value;
      setIsMedicalDiseases(isMedicalDiseases_3);
    } else if (e.target.name === 'isMedicalDiseases-4') {
      const isMedicalDiseases_4 = [...isMedicalDiseases];
      isMedicalDiseases_4[4] = e.target.value;
      setIsMedicalDiseases(isMedicalDiseases_4);
    } else if (e.target.name === 'other-0') {
      const other_0 = [...other];
      other_0[0] = e.target.value;
      setOther(other_0);
    } else if (e.target.name === 'other-1') {
      const other_1 = [...other];
      other_1[1] = e.target.value;
      setOther(other_1);
    } else if (e.target.name === 'other-2') {
      const other_2 = [...other];
      other_2[2] = e.target.value;
      setOther(other_2);
    } else if (e.target.name === 'other-3') {
      const other_3 = [...other];
      other_3[3] = e.target.value;
      setOther(other_3);
    } else if (e.target.name === 'other-4') {
      const other_4 = [...other];
      other_4[4] = e.target.value;
      setOther(other_4);
    } else if (e.target.name === 'comment-0') {
      const comment_0 = [...comment];
      comment_0[0] = e.target.value;
      setComment(comment_0);
    } else if (e.target.name === 'comment-1') {
      const comment_1 = [...comment];
      comment_1[1] = e.target.value;
      setComment(comment_1);
    } else if (e.target.name === 'comment-2') {
      const comment_2 = [...comment];
      comment_2[2] = e.target.value;
      setComment(comment_2);
    } else if (e.target.name === 'comment-3') {
      const comment_3 = [...comment];
      comment_3[3] = e.target.value;
      setComment(comment_3);
    } else if (e.target.name === 'comment-4') {
      const comment_4 = [...comment];
      comment_4[4] = e.target.value;
      setComment(comment_4);
    } else if (e.target.name === 'name-0') {
      const name_0 = [...name];
      name_0[0] = e.target.value;
      setName(name_0);
    } else if (e.target.name === 'name-1') {
      const name_1 = [...name];
      name_1[1] = e.target.value;
      setName(name_1);
    } else if (e.target.name === 'name-2') {
      const name_2 = [...name];
      name_2[2] = e.target.value;
      setName(name_2);
    } else if (e.target.name === 'name-3') {
      const name_3 = [...name];
      name_3[3] = e.target.value;
      setName(name_3);
    } else if (e.target.name === 'name-4') {
      const name_4 = [...name];
      name_4[4] = e.target.value;
      setName(name_4);
    } else if (e.target.name === 'date-0') {
      const date_0 = [...date];
      date_0[0] = e.target.value;
      setDate(date_0);
    } else if (e.target.name === 'date-1') {
      const date_1 = [...date];
      date_1[1] = e.target.value;
      setDate(date_1);
    } else if (e.target.name === 'date-2') {
      const date_2 = [...date];
      date_2[2] = e.target.value;
      setDate(date_2);
    } else if (e.target.name === 'date-3') {
      const date_3 = [...date];
      date_3[3] = e.target.value;
      setDate(date_3);
    } else if (e.target.name === 'date-4') {
      const date_4 = [...date];
      date_4[4] = e.target.value;
      setDate(date_4);
    }
  };

  // set Information to backend

  const addRiskInformation = async () => {
    let objTotalRisk = {
      history: [
        {
          id: 1,
          isCheck: infantDied,
        },
        {
          id: 2,
          isCheck: aborts,
        },
        {
          id: 3,
          isCheck: weight_2500,
        },
        {
          id: 4,
          isCheck: weight_4000,
        },
        {
          id: 5,
          isCheck: toxicPregnant,
        },
        {
          id: 6,
          isCheck: reproductiveSystem,
        },
      ],
      examBy: name,
      curPregId: 1,
      present: [
        [
          {
            id: 7,
            isCheck: twinPregnancy,
          },
          {
            id: 8,
            isCheck: age_17_edc,
          },
          {
            id: 9,
            isCheck: age_35_edc,
          },
          {
            id: 10,
            isCheck: rhNegative,
          },
          {
            id: 11,
            isCheck: vaginalBleeding,
          },
          {
            id: 12,
            isCheck: pelvicLump,
          },
          {
            id: 13,
            isCheck: diastolic_90,
          },
          {
            id: 14,
            isCheck: Bmi,
          },
        ],
      ],
      examBy: name,
      curPregId: 1,
      medicine: [
        [
          {
            id: 15,
            isCheck: isAnemia,
          },
          {
            id: 16,
            isCheck: isDiabetes,
          },
          {
            id: 17,
            isCheck: isKidney,
          },
          {
            id: 18,
            isCheck: isHeart,
          },
          {
            id: 19,
            isCheck: isSmoke,
          },
          {
            id: 20,
            isCheck: isMedicalDiseases,
          },
          {
            id: 21,
            isCheck: other,
          },
        ],
      ],
      examBy: name,
      curPregId: 1,
    };

    const resHistory = await axios.post('/riskEvaluation/', objTotalRisk);

    notification.open({
      message: 'RiskEvaluation Form',
      description: 'Submit Form complete.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  return (
    <>
      <Form onFinish={onFinish}>
        <Row style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Row style={{ textAlign: 'center' }}>
            <Col span={24}>
              <Title level={3} style={{ textDecoration: 'underline' }}>
                เกณฑ์ประเมินความเสี่ยงของหญิงตั้งครรภ์เมื่อมาฝากครรภ์
              </Title>
            </Col>
          </Row>

          <Row style={{ textAlign: 'center' }}>
            <Col span={24}>
              <Risk
                onChangeHistory={onChangeHistory}
                onChangePresent={onChangePresent}
                onChangeMedicine={onChangeMedicine}
              />
            </Col>
          </Row>
        </Row>

        <Form.Item>
          <Row justify="end">
            <Col>
              <Button
                type="primary"
                onClick={addRiskInformation}
                style={{ width: '150px', marginRight: '8px' }}
                htmlType="submit"
              >
                บันทึก
              </Button>
              <Button type="primary" style={{ width: '150px' }} danger>
                ยกเลิก
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </>
  );
}

export default RiskEvaluation;
