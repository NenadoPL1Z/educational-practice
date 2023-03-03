import React, {useEffect, useState} from 'react';
import {TitleSC} from "../UI/TitleSC";
import {styled} from "@mui/material";
import {useParams} from "react-router-dom";
import {ITestModel} from "../lib/models/ITestModel";
import PageTest from "./PageTest/PageTest";

type StateType = {title: string, text: string, test: ITestModel | null  }

const DynamicPage = () => {
    const [data, setData] = useState<StateType>({title: "", text: "", test: null})
    const {id} = useParams()

    useEffect(() => {
        if (id) {
            fetch(`/jsons/${id}.json`).then((r) => r.json()).then(r => {
                setData(r)
            })
        }
    }, [id])

    return (
        <ContainerSC>
            <ContainerTitleSC>{data.title}</ContainerTitleSC>
            <ParagraphSC>{data.text}</ParagraphSC>
            {data.test && (
                <PageTest {...data.test}/>
            )}
        </ContainerSC>
    );
};

const ContainerSC = styled("section")`
  padding: 15px;
`;

const ContainerTitleSC = styled(TitleSC)`
    padding: 20px 10px;
`


const ParagraphSC = styled("pre")`
  font-size: 20px;
  white-space: pre-wrap
`

export default DynamicPage;