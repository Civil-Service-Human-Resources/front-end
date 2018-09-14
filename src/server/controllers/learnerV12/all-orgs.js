import { registerPersonalGet } from './register';

/* ////////////////////////////////////////

  ** ALL organisations/departments **

//////////////////////////////////////// */

// { value: '0', text: 'Select an organisation' },

let allOrgsAndSubDivisions = [
  'Arts Council England',
  "Attorney General's Office",
  "Attorney General's Office Serious Fraud Office",
  'British Business Bank',
  'British Business Bank British Business Bank',
  'British Overseas Territories',
  'British Overseas Territories Anguilla',
  'British Overseas Territories Ascension Island',
  'British Overseas Territories Bermuda',
  'British Overseas Territories British Antarctic Territory',
  'British Overseas Territories British Indian Ocean Territory',
  'British Overseas Territories British Overseas Territories',
  'British Overseas Territories British Virgin Islands',
  'British Overseas Territories Cayman Islands',
  'British Overseas Territories Falkland Island',
  'British Overseas Territories Gibraltar',
  'British Overseas Territories Montserrat',
  'British Overseas Territories Pitcairn Island',
  'British Overseas Territories South Georgia',
  'British Overseas Territories St Helena',
  'British Overseas Territories Tristan da Cunha',
  'British Overseas Territories Turks and Caicos Islands',
  'British Transport Police Authority',
  'Cabinet Office',
  'Cabinet Office Business Partnerships',
  'Cabinet Office Cabinet Office HR',
  "Cabinet Office Chief Executive's Office",
  'Cabinet Office Civil Contingencies Secretariat',
  'Cabinet Office Civil Service Commission (Independent Offices)',
  'Cabinet Office Civil Service Group',
  'Cabinet Office Civil Service HR CSHR',
  'Cabinet Office Civil Service Pensions',
  'Cabinet Office Commercial Models',
  'Cabinet Office Committee on Standards in Public Life',
  'Cabinet Office Constitution Group',
  'Cabinet Office Crown Commercial Service',
  'Cabinet Office Cyber and Government Security Directorate',
  'Cabinet Office Digital & Technology Team',
  'Cabinet Office EDS',
  'Cabinet Office Europe Unit',
  'Cabinet Office Finance and Estates Management',
  'Cabinet Office Foreign and Defence Secretariat',
  'Cabinet Office Foxhound',
  'Cabinet Office Fraud, Error and Debt',
  'Cabinet Office Geospatial Commission',
  'Cabinet Office Gov Comms',
  'Cabinet Office Government Commercial Function/GCCO',
  'Cabinet Office Government Digital Service',
  'Cabinet Office Government Property Agency',
  'Cabinet Office Government Recruitment Service',
  'Cabinet Office Grenfell Tower Inquiry',
  'Cabinet Office Honours and Appointments',
  'Cabinet Office House of Commons Business Managers',
  'Cabinet Office House of Lords Business Managers',
  'Cabinet Office Implementation Group',
  'Cabinet Office Infected Blood Inquiry',
  'Cabinet Office Infrastructure and Projects Authority',
  'Cabinet Office Intelligence Security Committee',
  'Cabinet Office Joint Intelligence Organisation',
  'Cabinet Office National Security Secretariat',
  'Cabinet Office Next Generation Shared services',
  'Cabinet Office Office of Government Property',
  'Cabinet Office Office of the Parliamentary Counsel',
  'Cabinet Office Policy Lab',
  "Cabinet Office Prime Minister's Office",
  'Cabinet Office Private Office Group',
  'Cabinet Office Privy Council Office',
  'Cabinet Office Public Bodies Reform',
  'Cabinet Office Registrar of Consultant Lobbyists',
  'Cabinet Office Royal Mail Pensions',
  'Cabinet Office Security',
  'Cabinet Office Security and Intelligence Directorate',
  'Capital for Enterprise',
  'Charity Commission',
  'Civil Service Commissioners',
  'Civil Service Employee Policy',
  'Civil Service Learning',
  'Civil Service Resourcing',
  'College of Policing',
  'Committee on Climate Change',
  'Competition Markets Authority',
  'Consumer Council for Water',
  'Consumer Council for Water Consumer Council for Water',
  'Criminal Cases Review Commission',
  'Crown Prosecution Service',
  'Crown Prosecution Service Central Casework Group',
  'Crown Prosecution Service CPS Direct',
  'Crown Prosecution Service CPSPOC',
  'Crown Prosecution Service Crown Prosecution Service Inspectorate',
  'Crown Prosecution Service Cymru/Wales',
  'Crown Prosecution Service East Midlands',
  'Crown Prosecution Service East of England',
  'Crown Prosecution Service HQ BIS',
  'Crown Prosecution Service HQ Communication',
  'Crown Prosecution Service HQ Corporate Services',
  'Crown Prosecution Service HQ Operations',
  'Crown Prosecution Service HQ PAID',
  'Crown Prosecution Service HQ Private Office',
  'Crown Prosecution Service HQ SPD',
  'Crown Prosecution Service International Division',
  'Crown Prosecution Service Merseyside & Cheshire',
  'Crown Prosecution Service North East',
  'Crown Prosecution Service North London',
  'Crown Prosecution Service North West',
  'Crown Prosecution Service Organised Crime Division',
  'Crown Prosecution Service South East',
  'Crown Prosecution Service South London',
  'Crown Prosecution Service South West',
  'Crown Prosecution Service Special Crime and Counter Terrorism Division',
  'Crown Prosecution Service Specialist Fraud',
  'Crown Prosecution Service Thames and Chiltern',
  'Crown Prosecution Service Wessex',
  'Crown Prosecution Service West Midlands',
  'Crown Prosecution Service Yorkshire & Humberside',
  'CSR Managed Fast Stream',
  'Debt Management Office',
  'Department for Business, Energy & Industrial Strategy',
  'Department for Business, Energy & Industrial Strategy ACAS',
  'Department for Business, Energy & Industrial Strategy Business & Science',
  'Department for Business, Energy & Industrial Strategy Companies House',
  'Department for Business, Energy & Industrial Strategy Energy & Security',
  'Department for Business, Energy & Industrial Strategy Energy Transformation',
  'Department for Business, Energy & Industrial Strategy Finance & Corporate Services',
  'Department for Business, Energy & Industrial Strategy Finance, Commercial and Digital Transformation',
  'Department for Business, Energy & Industrial Strategy Financial Reporting Council',
  'Department for Business, Energy & Industrial Strategy HM Land Registry',
  'Department for Business, Energy & Industrial Strategy Insolvency Service',
  'Department for Business, Energy & Industrial Strategy Intellectual Property Office',
  'Department for Business, Energy & Industrial Strategy International, Growth and Analysis',
  'Department for Business, Energy & Industrial Strategy Market Frameworks',
  'Department for Business, Energy & Industrial Strategy Met Office',
  'Department for Business, Energy & Industrial Strategy MPST',
  'Department for Business, Energy & Industrial Strategy Office of Manpower Economics',
  'Department for Business, Energy & Industrial Strategy Ordnance Survey',
  'Department for Business, Energy & Industrial Strategy Shareholder Executive',
  'Department for Business, Energy & Industrial Strategy UK Space Agency',
  'Department for Digital,Culture,Media and Sport',
  'Department for Digital,Culture,Media and Sport Office of Civil Society & Innovation',
  'Department for Education',
  'Department for Education ESD',
  'Department for Education ESFA',
  'Department for Education HEFE',
  'Department for Education IFD',
  'Department for Education IRT',
  'Department for Education Legal Advisors Office',
  'Department for Education SCME',
  'Department for Exiting the European Union',
  'Department for Exiting the European Union Department for Exiting the European Union',
  'Department for International Development',
  'Department for International Development Department for International Development',
  'Department for International Trade (DIT)',
  'Department for International Trade (DIT) Corporate Centre',
  'Department for International Trade (DIT) ITI',
  'Department for International Trade (DIT) Ministerial Strategy Directorate',
  'Department for International Trade (DIT) Trade Policy Group',
  'Department for the Environment Food and Rural Affairs (DEFRA)',
  'Department for the Environment Food and Rural Affairs (DEFRA) Animal & Plant Health Agency',
  'Department for the Environment Food and Rural Affairs (DEFRA) Centre for Environment Fisheries and Aquaculture Science',
  'Department for the Environment Food and Rural Affairs (DEFRA) DEFRA',
  'Department for the Environment Food and Rural Affairs (DEFRA) Food and Environment Research Agency',
  'Department for the Environment Food and Rural Affairs (DEFRA) Rural Payments Agency',
  'Department for the Environment Food and Rural Affairs (DEFRA) Veterinary Medicines Directorate',
  'Department for Transport DfT',
  'Department for Transport Driver & Vehicle Standards Agency DVSA',
  'Department for Transport Driver and Vehicle Licensing Agency DVLA',
  'Department for Transport Highways Agency',
  'Department for Transport Maritime and Coastguard Agency',
  'Department for Transport Office of the Traffic Commissioner',
  'Department for Transport Vehicle & Operator Services Agency VOSA',
  'Department for Transport Vehicle Certification Agency',
  'Department for Work and Pensions DWP',
  'Department for Work and Pensions DWP HQ - Corporate',
  'Department for Work and Pensions DWP HQ - Operations',
  'Department for Work and Pensions DWP Pension Wise Service',
  'Department of Health and Social Care',
  'Department of Health and Social Care DH Core',
  'Department of Health and Social Care Health Research Authority',
  'Department of Health and Social Care Human Fertilisation & Embryology Authority',
  'Department of Health and Social Care Medicines and Healthcare Products Regulatory Agency',
  'Department of Health and Social Care Public Health England',
  'Disclosure & Barring Service',
  'Disclosure & Barring Service Disclosure & Barring Service',
  'DO NOT USE - UNALLOCATED',
  'DO NOT USE - UNALLOCATED Unknown Department',
  'ECITB',
  'Environment Agency',
  'Environment Agency Environment Agency',
  'Equality and Human Rights Commission',
  'ESTYN',
  'EU - Secondees',
  'Family Justice Council',
  'Food Standards Agency',
  'Food Standards Scotland',
  'Foreign & Commonwealth Office',
  'Foreign & Commonwealth Office FCO Services',
  'Foreign & Commonwealth Office Foreign & Commonwealth Office',
  'Foreign & Commonwealth Office Wilton Park Conference Centre',
  'Forestry Commission',
  'Forestry Commission Central Services (excl FR)',
  'Forestry Commission FC England',
  'Forestry Commission FC Scotland',
  'Forestry Commission FE England',
  'Forestry Commission FE Scotland',
  'Forestry Commission FR',
  'Gambling Commission',
  'Gangmasters and Labour Abuse Authority',
  'GCHQ',
  "Government Actuary's Department",
  'Government Equalities Office',
  'Government Internal Audit Agency (GIAA)',
  'Government Legal Department',
  'Great Britain China Centre',
  'Health & Safety Executive',
  'High Speed Two Limited (HS2 Ltd)',
  'Higher Education Funding Council for Wales',
  'HM Inspectorate of Prisons',
  'HM Inspectorate of Probation',
  'HM Revenue & Customs',
  'HM Revenue & Customs Benefits & Credits',
  'HM Revenue & Customs Business Tax',
  'HM Revenue & Customs Central Tax and Strategy Group',
  'HM Revenue & Customs Chief Digital and Information Officer Group',
  'HM Revenue & Customs Chief Executive and Permanent Secretary',
  "HM Revenue & Customs Chief Finance Officer's Group",
  'HM Revenue & Customs Enforcement & Compliance',
  'HM Revenue & Customs HM Revenue & Customs',
  'HM Revenue & Customs Human Resources',
  'HM Revenue & Customs Legal and Accountants',
  'HM Revenue & Customs Personal Tax',
  'HM Revenue & Customs Revenue and Customs Digital and Technology Services',
  'HM Revenue & Customs Valuation Office',
  'HM Treasury',
  'HM Treasury Business and International Tax',
  'HM Treasury Corporate Centre',
  'HM Treasury Economics',
  'HM Treasury Enterprise and Growth',
  'HM Treasury Financial Services',
  'HM Treasury Financial Stability',
  'HM Treasury Fiscal',
  'HM Treasury International and EU',
  'HM Treasury Ministerial and Comms',
  'HM Treasury Personal Tax welfare and Pensions',
  'HM Treasury Public Services',
  'HM Treasury Public-spending',
  'HM Treasury Strategy Planning and Budget',
  'HM Treasury Treasury Legal Advisors',
  'Home Office',
  'Home Office Border Force',
  'Home Office Borders, Immigration and Citizenship System Policy and Strategy Group',
  'Home Office Capabilities and Resources Group',
  'Home Office Communication Directorate',
  'Home Office Crime Policing and Fire Group',
  'Home Office Europe Directorate',
  'Home Office HM Passport Office',
  'Home Office HMIC',
  'Home Office Home Office Digital, Data and Technology',
  'Home Office Home Office Legal Advisers',
  'Home Office Immigration Enforcement',
  'Home Office Independent Anti-Slavery Commissioner',
  'Home Office Office for Security and Counter Terrorism',
  'Home Office Office of the Immigration Services Commissioner',
  'Home Office Operational Systems Transformation',
  'Home Office Strategy Directorate',
  'Home Office UK Visas and Immigration',
  'Homes England',
  'House of Commons',
  'House of Commons House of Commons',
  'House of Lords',
  'House of Lords House of Lords',
  'Human Fertilisation and Embryology Authority',
  'Human Tissue Authority',
  ,
  'Independent Advisory Council on Deaths in Custody',
  'Independent Living Fund',
  'Independent Monitoring Boards',
  'Independent Office for Police Conduct',
  'Independent Parliamentary Standards Authority',
  'Information Commissioner’s Office',
  'Innovate UK',
  'Institute for Apprenticeships',
  'Institute for Apprenticeships AO',
  'Institute for Apprenticeships EO',
  'Institute for Apprenticeships GRADE 6 & GRADE 7',
  'Institute for Apprenticeships HEO & SEO',
  'Institute for Apprenticeships SCS',
  'Joint Nature Conservation Committee',
  'Joint Nature Conservation Committee Joint Nature Conservation Committee',
  'Judicial Appointments and Conduct Ombudsman',
  'Judicial Appointments and Conduct Ombudsman Judicial Appointments and Conduct Ombudsman',
  'Judicial Appointments Commission (JAC)',
  'Judicial Appointments Commission (JAC) Judicial Appointments Commission (JAC)',
  'Judicial Office of England and Wales',
  'Judicial Office of England and Wales Judicial Office of England and Wales',
  'Lancashire Probation Trust',
  'Lancashire Probation Trust Lancashire Probation Trust',
  'Law Commission',
  'Law Commission Law Commission',
  'Leasehold Advisory Service',
  'Leasehold Advisory Service Leasehold Advisory Service',
  'Legal Ombudsman',
  'Legal Ombudsman Legal Ombudsman',
  'Legal Services Board',
  'Legal Services Board Legal Services Board',
  'Legal Services Consumer Panel',
  'Legal Services Consumer Panel Legal Services Consumer Panel',
  'LocatED',
  'LocatED Acquisitions',
  'LocatED Development',
  'LocatED Finance',
  'LocatED Graduate',
  'LocatED HR',
  'LocatED Legal',
  'LocatED Marketing',
  'LocatED Support/PA',
  'LocatED Technical',
  'Marine Management Organisation',
  'Ministry of Defence',
  'Ministry of Defence Air Command',
  'Ministry of Defence Army Command',
  'Ministry of Defence Defence Business Services',
  'Ministry of Defence Defence Electronics & Components Agency',
  'Ministry of Defence Defence Equipment and Support',
  'Ministry of Defence Defence Science & Technology Laboratory',
  'Ministry of Defence DIO',
  'Ministry of Defence Head Office & Corporate Services',
  'Ministry of Defence JFC',
  'Ministry of Defence Navy Command',
  'Ministry of Defence Nuclear',
  'Ministry of Defence Submarine Delivery Agency (SDA)',
  'Ministry of Defence UK Hydrographic Office',
  'Ministry of Housing, Communities and Local Government',
  'Ministry of Housing, Communities and Local Government Housing Ombudsman Service',
  'Ministry of Housing, Communities and Local Government Ministry of Housing, Communities and Local Government',
  'Ministry of Housing, Communities and Local Government Planning Inspectorate',
  'Ministry of Housing, Communities and Local Government Queen Elizabeth II Conference Centre',
  'Ministry of Justice',
  'Ministry of Justice CICA',
  'Ministry of Justice Finance, Analysis and Commercial',
  'Ministry of Justice HMCTS',
  'Ministry of Justice LAA',
  'Ministry of Justice NOMS',
  'Ministry of Justice Operations',
  'Ministry of Justice OPG',
  'Ministry of Justice Policy',
  'Ministry of Justice Prison Reform and Youth Justice Policy',
  'National Assembly of Wales',
  'National Assembly of Wales National Assembly of Wales',
  'National Audit Office',
  'National Audit Office National Audit Office',
  'National Crime Agency',
  'National Crime Agency National Crime Agency',
  'National Employment Savings Trust Corporation',
  'National Employment Savings Trust Corporation National Employment Savings Trust Corporation',
  'National Forest Company',
  'National Forest Company National Forest Company',
  'National Infrastructure Commission',
  'National Infrastructure Commission National Infrastructure Commission',
  'National Institute for Clinical Excellence',
  'National Institute for Clinical Excellence National Institute for Clinical Excellence',
  'National Portrait Gallery',
  'National Portrait Gallery National Portrait Gallery',
  'National Savings and Investments',
  'National Savings and Investments National Savings and Investments',
  'Natural England',
  'Natural England Natural England',
  'Natural Resources Wales',
  'Natural Resources Wales Natural Resources Wales',
  'NHS Digital',
  'NHS Digital NHS Digital',
  'NHS Improvement',
  'NHS Improvement NHS Improvement',
  'Northern Ireland Office',
  'Northern Ireland Office Northern Ireland Office',
  'Northern Lighthouse Board',
  'Northern Lighthouse Board Northern Lighthouse Board',
  'Nuclear Decommissioning Authority',
  'Nuclear Decommissioning Authority Nuclear Decommissioning Authority',
  'Office for Budget Responsibility',
  'Office for Budget Responsibility Office for Budget Responsibility',
  'Office for Judicial Complaints',
  'Office for Judicial Complaints Office for Judicial Complaints',
  'Office for National Statistics',
  'Office for National Statistics Office for National Statistics',
  'Office for Nuclear Regulation',
  'Office for Nuclear Regulation Office for Nuclear Regulation',
  'Office for Standards in Education',
  'Office for Standards in Education Office for Standards in Education',
  'Office for the Accountant General',
  'Office for the Accountant General Office of the Accountant General',
  'Office of Gas and Electricity Markets (Ofgem)',
  'Office of Gas and Electricity Markets (Ofgem) Consumer and Competition',
  'Office of Gas and Electricity Markets (Ofgem) Corporate Function',
  'Office of Gas and Electricity Markets (Ofgem) Energy Systems',
  'Office of Gas and Electricity Markets (Ofgem) Executive & GEMA',
  'Office of Gas and Electricity Markets (Ofgem) Improving Regulations',
  'Office of Gas and Electricity Markets (Ofgem) Networks',
  'Office of Gas and Electricity Markets (Ofgem) Ofgem E-Serve',
  'Office of Rail and Road',
  'Office of Rail and Road Office of Rail and Road',
  "Office of the Children's Commissioner",
  "Office of the Children's Commissioner Office of the Children's Commissioner",
  'Official Solicitor',
  'Official Solicitor Official Solicitor',
  'Ofqual',
  'Ofqual Ofqual',
  'OFWAT - The Water Services Regulation Authority',
  'OFWAT - The Water Services Regulation Authority OFWAT - The Water Services Regulation Authority',
  'Oil and Gas Authority',
  'Oil and Gas Authority Oil and Gas Authority',
  'Parole Board',
  'Parole Board Parole Board',
  'Pensions Ombudsman Service',
  'Pensions Ombudsman Service Pensions Ombudsman Service',
  'Porton Biopharma',
  'Porton Biopharma Porton Biopharma',
  'Prisons and Probation Ombudsman',
  'Public Lending Right',
  'Pubs Code Adjudicator',
  'Revenue Scotland',
  'Royal Botanic Gardens, Kew',
  'Scotland Office and the Office of the Advocate General',
  'Scottish Government',
  'Scottish Government Accountant in Bankruptcy',
  'Scottish Government Architecture and Design Scotland',
  'Scottish Government Crown Office and Procurator Fiscal',
  'Scottish Government Disclosure Scotland',
  'Scottish Government Education Scotland',
  'Scottish Government Highlands and Islands Enterprise',
  'Scottish Government National Records of Scotland',
  'Scottish Government Office of the Scottish Charity Regulator',
  'Scottish Government Registers of Scotland',
  'Scottish Government Scottish Enterprise',
  'Scottish Government Scottish Fiscal Commission',
  'Scottish Government Scottish Government',
  'Scottish Government Scottish Housing Regulator',
  'Scottish Government Scottish Legal Complaints Commission',
  'Scottish Government Scottish Public Pensions Agency (SPPA)',
  'Scottish Government Student Awards Agency',
  'Scottish Government The Crofting Commission',
  'Scottish Government The Scottish Funding Council for Further and Higher Education',
  'Scottish Government Transport Scotland',
  'Scottish Government Water Industry Commission for Scotland',
  'Security Industry Authority',
  'Sentencing Council',
  'Single Source Regulations Office',
  'Sports Grounds Safety Authority',
  'Start-Up Loan Company',
  'The Electoral Commission',
  'The National Archives',
  'The National Archives CEOs Office',
  'The National Archives Digital',
  'The National Archives Finance & Commercial',
  'The National Archives Information Policy & Services',
  'The National Archives Operations',
  'The National Archives Public Engagement',
  'The National Archives Research & Collections',
  'The Pensions Advisory Service Ltd',
  'The Pensions Regulator',
  'Transport Focus',
  'UK Commission for Employment and Skills',
  'UK Export Finance',
  'UK Government Investments Ltd',
  'UK Statistics Authority',
  'UK Supreme Court',
  'Wales Office',
  'Welsh Government',
  'Welsh Government Economy, Science and Transport',
  'Welsh Government Education and Skills',
  'Welsh Government Finance and Corporate Services',
  'Welsh Government Health and Social Services',
  'Welsh Government Legal Services',
  'Welsh Government Local Government and Communities',
  'Welsh Government Natural Resources',
  "Welsh Government Permanent Secretary's Department",
  'Welsh Revenue Authority',
  'Westminster Foundation for Democracy',
  'Youth Justice Board for England and Wales',
];

module.exports.allOrgsAndSubDivisions = allOrgsAndSubDivisions;
