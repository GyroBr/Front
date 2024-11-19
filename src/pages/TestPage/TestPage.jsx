import React from 'react';
import { Sidebar } from '../../components/SideBarComponent/index'; // Ajuste o caminho conforme necessário
import { ThemeProvider } from '../../components/SideBarComponent/ThemeContext'; // Verifique o caminho do seu ThemeContext
import './TestPage.css';

const TestPage = () => {
    return (
      <ThemeProvider>
        <div className="test-page">
          <Sidebar />
          <div className="content">
            <h1>Bem-vindo!</h1>
          </div>
        </div>
      </ThemeProvider>
    );
  };

export default TestPage;
