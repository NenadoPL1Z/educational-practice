import React, {useEffect, useState} from 'react';
import {TitleSC} from "../UI/TitleSC";
import {styled} from "@mui/material";
import {useParams} from "react-router-dom";

const DynamicPage = () => {
    const [data, setData] = useState<{title: string, text: string}>({title: "", text: ""})
    const {id} = useParams()

    useEffect(() => {
        if (id) {
            console.log(id)
            fetch(`/jsons/${id}.json`).then((r) => r.json()).then(r => {
                setData(r)
            })
        }
        // fetch("")
    }, [id])

    return (
        <ContainerSC>
            <ContainerTitleSC>{data.title}</ContainerTitleSC>
            <ParagraphSC>{data.text}</ParagraphSC>
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