
import {NavBarLateral} from "../../components/NavBarLateral/NavBarLateral/NavBarLateral";
import { useState } from 'react';
import {Perfil} from "../../components/Perfil/Perfil";
import {DashboardFinance} from "../../components/Dashboard/DashboardFinance";

import styles from './UserPages.module.css';

export function UserPages() {

    const [page, setPage] = useState('Perfil');

    const handlePageChange = (selectedPage) => {
        setPage(selectedPage);
    };
    
        console.log(page);
        
    return (
        
        <div className={styles.conteudo}>
        <NavBarLateral 
        onSelectPage={handlePageChange}
        onPage={page} />
        
        {page === 'Perfil' && <Perfil />}
        {page === 'Dashboard' && <DashboardFinance />}
    </div>
    )
}