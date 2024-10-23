-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 23/10/2024 às 04:58
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `projetoapi`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `aluguel`
--

CREATE TABLE `aluguel` (
  `ID` varchar(55) NOT NULL,
  `IDFILME` varchar(55) DEFAULT NULL,
  `IDUSUARIO` varchar(55) DEFAULT NULL,
  `DTMOV` datetime(6) DEFAULT NULL,
  `TIPO` int(55) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `filme`
--

CREATE TABLE `filme` (
  `ID` varchar(55) NOT NULL,
  `NOME` varchar(55) DEFAULT NULL,
  `DURACAO` date DEFAULT NULL,
  `SINOPSE` text DEFAULT NULL,
  `ANO` varchar(11) DEFAULT NULL,
  `IDGenero` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `filme`
--

INSERT INTO `filme` (`ID`, `NOME`, `DURACAO`, `SINOPSE`, `ANO`, `IDGenero`) VALUES
('875ea8ea-bce4-4703-89d2-5fb312c10c74', 'Um amor para recordar', '0000-00-00', 'Dois jovens se apaixonam, porém ela tem leucemia e ele é o astro da escola ', '2002', NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `filme_pessoa`
--

CREATE TABLE `filme_pessoa` (
  `ID` varchar(55) NOT NULL,
  `IDFilme` varchar(55) DEFAULT NULL,
  `IDPessoa` varchar(55) DEFAULT NULL,
  `FUNCAO` varchar(55) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `genero`
--

CREATE TABLE `genero` (
  `ID` varchar(55) NOT NULL,
  `NOME` varchar(55) DEFAULT NULL,
  `DESCRICAO` varchar(55) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `genero`
--

INSERT INTO `genero` (`ID`, `NOME`, `DESCRICAO`) VALUES
('1', 'Terror', 'Filmes para causar medo em quem assiste'),
('2', 'Comédia', 'Filmes para causar risos em quem assiste'),
('3', 'Drama', 'Filmes para causar choro em quem assiste'),
('7edf04a6-40cd-40d3-93f9-8ab697680c40', 'Romance', 'Filmes para se emocionar');

-- --------------------------------------------------------

--
-- Estrutura para tabela `pessoa`
--

CREATE TABLE `pessoa` (
  `ID` varchar(55) NOT NULL,
  `NOME` varchar(55) DEFAULT NULL,
  `NASCIMENTO` date DEFAULT NULL,
  `PAIS` varchar(55) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `pessoa`
--

INSERT INTO `pessoa` (`ID`, `NOME`, `NASCIMENTO`, `PAIS`) VALUES
('99f90e52-b54e-4250-80ca-1ab2c2b5dda5', 'Isabella', '0000-00-00', 'Brasil'),
('fa1bce0d-4938-47f9-9b72-ffc0e32e36ba', 'Ana', '1990-11-27', 'Brasil');

-- --------------------------------------------------------

--
-- Estrutura para tabela `serie`
--

CREATE TABLE `serie` (
  `ID` varchar(55) NOT NULL,
  `NOME` varchar(55) DEFAULT NULL,
  `TEMPORADA` varchar(55) DEFAULT NULL,
  `EPISODIO` varchar(55) DEFAULT NULL,
  `IDFILME` varchar(55) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `ID` varchar(55) NOT NULL,
  `EMAIL` varchar(55) DEFAULT NULL,
  `SENHA` varchar(55) DEFAULT NULL,
  `TELEFONE` varchar(55) DEFAULT NULL,
  `CIDADE` varchar(55) DEFAULT NULL,
  `ENDERECO` varchar(55) DEFAULT NULL,
  `CEP` varchar(55) DEFAULT NULL,
  `Assinatura` datetime(6) DEFAULT NULL,
  `IDPESSOA` varchar(55) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`ID`, `EMAIL`, `SENHA`, `TELEFONE`, `CIDADE`, `ENDERECO`, `CEP`, `Assinatura`, `IDPESSOA`) VALUES
('1c1af024-ea8c-44fa-9775-9b82b6d7d0bd', NULL, '123456', '14988065221', NULL, NULL, NULL, NULL, NULL);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `aluguel`
--
ALTER TABLE `aluguel`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `IDFILME` (`IDFILME`),
  ADD KEY `IDUSUARIO` (`IDUSUARIO`);

--
-- Índices de tabela `filme`
--
ALTER TABLE `filme`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `IDGenero` (`IDGenero`);

--
-- Índices de tabela `filme_pessoa`
--
ALTER TABLE `filme_pessoa`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `IDFilme` (`IDFilme`),
  ADD KEY `IDPessoa` (`IDPessoa`);

--
-- Índices de tabela `genero`
--
ALTER TABLE `genero`
  ADD PRIMARY KEY (`ID`);

--
-- Índices de tabela `pessoa`
--
ALTER TABLE `pessoa`
  ADD PRIMARY KEY (`ID`);

--
-- Índices de tabela `serie`
--
ALTER TABLE `serie`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `IDFILME` (`IDFILME`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `IDPESSOA` (`IDPESSOA`);

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `aluguel`
--
ALTER TABLE `aluguel`
  ADD CONSTRAINT `aluguel_ibfk_1` FOREIGN KEY (`IDFILME`) REFERENCES `filme` (`ID`),
  ADD CONSTRAINT `aluguel_ibfk_2` FOREIGN KEY (`IDUSUARIO`) REFERENCES `usuario` (`ID`);

--
-- Restrições para tabelas `filme`
--
ALTER TABLE `filme`
  ADD CONSTRAINT `filme_ibfk_1` FOREIGN KEY (`IDGenero`) REFERENCES `genero` (`ID`);

--
-- Restrições para tabelas `filme_pessoa`
--
ALTER TABLE `filme_pessoa`
  ADD CONSTRAINT `filme_pessoa_ibfk_1` FOREIGN KEY (`IDFilme`) REFERENCES `filme` (`ID`),
  ADD CONSTRAINT `filme_pessoa_ibfk_2` FOREIGN KEY (`IDPessoa`) REFERENCES `pessoa` (`ID`);

--
-- Restrições para tabelas `serie`
--
ALTER TABLE `serie`
  ADD CONSTRAINT `serie_ibfk_1` FOREIGN KEY (`IDFILME`) REFERENCES `filme` (`ID`);

--
-- Restrições para tabelas `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`IDPESSOA`) REFERENCES `pessoa` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
