
module.exports = ({
	investment_commercial_acc
	,personal_corporate_acc
	,bank_account_country
	,particular_bank
	,firstname
	,lastname
	,dob
	,nationality
	,address
	,CountryOfResidence
	,CityOfResidence
	,MaritalStatus
	,email
	,phone
	,partner_spouse
	,name_age_children
	,father
	,mother
	,siblings
	,University_institution_graduate
	,graduate_year
	,profession
	,occupational_status
	,actual_employer
	,employer_title
	,business_nature
	,Country_Business_headquarter
	,employment_start_date
	,company_website
	,share_of_company
	,annual_average_total_compensation
	,approx_employees
	,political_exposed_person
	,previous_employer
	,previous_work_title
	,previous_business_nature
	,previous_Country_Business_headquarter
	,previous_start_year
	,previous_to_year
	,previous_company_website
	,previous_company_share
	,previous_company_annual_average_total_compensation
	,previous_company_approx_employees

	,Avg_Annual_total_Income
	,own_real_estate_object
	,your_real_estate_investments
	,your_real_estate_investments_located
	,list_name_of_bankable_assets
	,bankable_assets_total_in_USD
	,source_of_your_wealth
	,investment_objective
	,risk_tolerance
	,investment_experience
	,investment_horizon
	,Investment_Knowledge_Experience
	,approx_amount_transfer_new_bank_account
	,From_which_bank_country_send_funds
	,transfers_intend_to_do_every_year
	,transfers_intend_to_receive_every_year
	,cfc_signature_right_people
    ,full_name_additional_signatory
	,full_name_additional_signatory_one
	,full_name_additional_signatory_two
	,full_name_additional_signatory_three
	,full_name_additional_signatory_four
	,full_name_additional_signatory_five
	,name_of_company
	,kind_of_company
	,names_beneficial_owners
	,names_directors_company
	,names_settlor_trust_foundation
	,desired_bank_any_bank_particular
	,potential_independent_wealth_manager
	,confirm_email
	,submit
	,confirm

    
})=>{
  const today = new Date()
  return `
  <html lang="en">
     <head>
        <title>KYC AppLication Data</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jura:wght@500&family=Roboto:wght@100;300;400;500;700;900&family=Style+Script&display=swap">
        <style>
           * {
           box-sizing: border-box;
           padding: 0;
           margin: 0;
           }
           table, tr, td { page-break-inside: avoid; }
        </style>
     </head>
     <body>
        <table border="0" style="padding: 0 16px; margin: auto;">
           <tbody>
              <tr>
                 <td>
                    <table border="0" style="width: 650px; background-color: #ffffff;  font-family: 'Roboto', sans-serif; color: #000000; line-height: 1.4; padding: 15px 16px 32px; margin: 15px auto;">
                       <thead>
                          <tr>
                             <th class="column"
                                style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
                                width="420">
                                <!-- Logo -->
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                   <tr>
                                      <td class="mobile-15">
                                         <div class="img-m-center"
                                            style="font-size:0pt; line-height:0pt; text-align:left">
                                            <a href="#" target="_blank"><img
                                               src="https://bankopeny.com/wp-content/uploads/2022/02/Bankopeny.png"
                                               border="0" width="185" alt="" /></a>
                                         </div>
                                      </td>
                                   </tr>
                                </table>
                                <!-- END Logo -->
                             </th>
                          </tr>
                          <!-- Heading -->
                          <tr>
                             <td bgcolor="#ffffff" style="padding: 10px 20px 0px 0px;">
                                <div class="h2"
                                   style="color:#000000; font-family: 'Roboto', sans-serif; font-weight: 600; font-size:16px; line-height:34px; text-align:left">
                                   <span class="mobile-block"></span>Client Profile (KCY)
                                </div>
                             </td>
                          </tr>
                          <!-- END Heading -->
                       </thead>
                       <tbody>
                          <tr>
                             <td>
                                <table id="for-border" style="width: 100%; margin: 8px 0; border-spacing: 0px;">
                                   <tbody style=" vertical-align: inherit;">
                                      <tr style="background-color: #f1f3f7;">
                                         <td style="border-bottom: 1px solid #000000; border-right: 1px solid #000000;
                                            border-left: 1px solid #000000; border-top: 1px solid #000000; font-weight: 600;
                                            font-size: 13px; padding: 8px;" colspan="6">(1)General Details:</td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Type of account:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${investment_commercial_acc ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${investment_commercial_acc}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;">
                                            <span style="display: block; font-size: 13px; vertical-align: middle;">Personal/corporate:</span>
                                         </td>
                                         <td width="25%" style="vertical-align: middle; border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${personal_corporate_acc ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${personal_corporate_acc}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Desired Jurisdiction:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${bank_account_country ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${bank_account_country}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;">
                                            <span style="display: block; font-size: 13px; vertical-align: middle;">Preferred Bank:</span>
                                         </td>
                                         <td width="25%" style="vertical-align: middle; border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${particular_bank ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${particular_bank}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr style="background-color: #f1f3f7;">
                                         <td style="border-bottom: 1px solid #000000; border-right: 1px solid #000000;
                                            border-left: 1px solid #000000; font-weight: 600;font-size: 13px; padding: 8px; vertical-align: middle; "
                                            colspan="6">(2) Personal Information of ${`${firstname}`} ${`${lastname}`}</td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">First Name:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${firstname ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${firstname}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;">Last Name:</span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${lastname ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${lastname}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Date of Birth:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${dob ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${dob}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;">Nationality:</span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${nationality ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${nationality}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">City of Residence:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${CityOfResidence ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${CityOfResidence}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;">Address:</span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${address ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${address}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Country of Residence::</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${CountryOfResidence ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${CountryOfResidence}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;"></span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            <span style="display: block; font-size: 13px; vertical-align: middle;"></span>
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Email:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${email ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${email}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;">Contact Number:</span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${phone ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${phone}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Marital Status:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${MaritalStatus ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${MaritalStatus}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;">Partner/Spouse:</span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${partner_spouse ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${partner_spouse}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Father:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${father ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${father}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;">Mother:</span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${mother ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${mother}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Children Name with age:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${name_age_children ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${name_age_children}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;">Sibling(s):</span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${siblings ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${siblings}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr style="background-color: #f1f3f7;">
                                         <td style="border-bottom: 1px solid #000000; border-right: 1px solid #000000;
                                            border-left: 1px solid #000000; font-weight: 600;font-size: 13px; padding: 8px; vertical-align: middle; "
                                            colspan="6">(3) Educational Background of ${`${firstname}`} ${`${lastname}`}</td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">University/Institution:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${University_institution_graduate ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${University_institution_graduate}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;">Graduate year:</span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${graduate_year ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${graduate_year}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr style="">
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Profession:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${profession ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${profession}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;"></span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            <span style="display: block; font-size: 13px; vertical-align: middle;"></span>
                                         </td>
                                      </tr>
                                      <tr style="background-color: #f1f3f7;">
                                         <td style="border-bottom: 1px solid #000000; border-right: 1px solid #000000;
                                            border-left: 1px solid #000000; font-weight: 600;font-size: 13px; padding: 8px; vertical-align: middle; "
                                            colspan="6">(4) Professional Background of ${`${firstname}`} ${`${lastname}`}</td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Occupational Status:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${occupational_status ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${occupational_status}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;"></span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            <span style="display: block; font-size: 13px; vertical-align: middle;"></span>
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Name of actual employer:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${actual_employer ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${actual_employer}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;">Title:</span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${employer_title ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${employer_title}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Nature of business:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${business_nature ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${business_nature}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;">Company’s address:</span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${Country_Business_headquarter ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${Country_Business_headquarter}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Employment start year:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${employment_start_date ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${employment_start_date}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;">Company website:</span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${company_website ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${company_website}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Total yearly compensation in USD:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${annual_average_total_compensation ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${annual_average_total_compensation}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;">Number of employees:</span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${approx_employees ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${approx_employees}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Shares in the company:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${share_of_company ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${share_of_company}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;">Political Exposed Person(PEP):</span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${political_exposed_person ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${political_exposed_person}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr style="background-color: #ffffff;">
                                         <td style="border-bottom: 1px solid #000000; border-right: 1px solid #000000;
                                            border-left: 1px solid #000000; font-weight: 600;font-size: 13px; padding: 8px; vertical-align: middle; "
                                            colspan="6">Previous Occupation</td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Name of previous employer:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${previous_employer ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${previous_employer}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;">Title:</span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${previous_work_title ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${previous_work_title}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Nature of business:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${previous_business_nature ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${previous_business_nature}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;">Company’s address:</span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${previous_Country_Business_headquarter ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${previous_Country_Business_headquarter}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Employment start date:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${previous_start_year ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${previous_start_year}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;">Employment end Date:</span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${previous_to_year ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${previous_to_year}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Website of the company:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${previous_company_website ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${previous_company_website}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;">Shares in the company:</span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${previous_company_share ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${previous_company_share}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Total yearly compensation in USD:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${previous_company_annual_average_total_compensation ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${previous_company_annual_average_total_compensation}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;">Number of employees:</span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${previous_company_approx_employees ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${previous_company_approx_employees}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr style="background-color: #f1f3f7;">
                                         <td style="border-bottom: 1px solid #000000; border-right: 1px solid #000000;
                                            border-left: 1px solid #000000; font-weight: 600;font-size: 13px; padding: 8px; vertical-align: middle; "
                                            colspan="6">(5) Financial Information of ${`${firstname}`} ${`${lastname}`}</td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Avg annual Income:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${Avg_Annual_total_Income ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${Avg_Annual_total_Income}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;">Number of own properties:</span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${own_real_estate_object ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${own_real_estate_object}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Total Real estate value:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${your_real_estate_investments ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${your_real_estate_investments}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;">Real estate locations:</span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${your_real_estate_investments_located ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${your_real_estate_investments_located}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Accounts with following Bank(s):</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${list_name_of_bankable_assets ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${list_name_of_bankable_assets}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;">Total bankable assets value in USD:</span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${bankable_assets_total_in_USD ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${bankable_assets_total_in_USD}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Source of wealth:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${source_of_your_wealth ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${source_of_your_wealth}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;"></span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            <span style="display: block; font-size: 13px; vertical-align: middle;"></span>
                                         </td>
                                      </tr>
                                      <tr style="background-color: #f1f3f7;">
                                         <td style="border-bottom: 1px solid #000000; border-right: 1px solid #000000;
                                            border-left: 1px solid #000000; font-weight: 600;font-size: 13px; padding: 8px; vertical-align: middle; "
                                            colspan="6">(6) Investment Objectives and Risk Profile</td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Investment Objective:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${investment_objective ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${investment_objective}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;">Risk Tolerance</span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${risk_tolerance ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${risk_tolerance}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Investment Experience (in years):</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${investment_experience ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${investment_experience}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;">Investment horizon (in years)</span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${investment_horizon ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${investment_horizon}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Investment Knowledge and Experience:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${Investment_Knowledge_Experience ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${Investment_Knowledge_Experience}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;"></span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            <span style="display: block; font-size: 13px; vertical-align: middle;"></span>
                                         </td>
                                      </tr>
                                      <tr style="background-color: #f1f3f7;">
                                         <td style="border-bottom: 1px solid #000000; border-right: 1px solid #000000;
                                            border-left: 1px solid #000000; font-weight: 600;font-size: 13px; padding: 8px; vertical-align: middle; "
                                            colspan="6">(7) Some details of the new account
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Approx. amount to be transferred:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${approx_amount_transfer_new_bank_account ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${approx_amount_transfer_new_bank_account}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;">From Bank</span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${From_which_bank_country_send_funds ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${From_which_bank_country_send_funds}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Nr. of transfers you intend to do every year:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${transfers_intend_to_do_every_year ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${transfers_intend_to_do_every_year}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;">Nr. of transfers you intend to receive every year:</span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${transfers_intend_to_receive_every_year ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${transfers_intend_to_receive_every_year}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr style="background-color: #f1f3f7;">
                                         <td style="border-bottom: 1px solid #000000; border-right: 1px solid #000000;
                                            border-left: 1px solid #000000; font-weight: 600;font-size: 13px; padding: 8px; vertical-align: middle; "
                                            colspan="6">(8) Join signatory
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Nr. of people that will have signatory rights besides you:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${cfc_signature_right_people ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${cfc_signature_right_people}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;">Name(s) of additional signatories:</span>
                                         </td>
                                         ${cfc_signature_right_people == 1 ? `   
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${full_name_additional_signatory ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${full_name_additional_signatory}`}</span>` : ''}
                                         </td>
                                         ` : ''}
                                         ${cfc_signature_right_people == 2 ? `   
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${full_name_additional_signatory_one ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${full_name_additional_signatory_one}`}</span>` : ''}
                                            ${full_name_additional_signatory_two ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${full_name_additional_signatory_two}`}</span>` : ''}
                                         </td>
                                         ` : ''}
                                         ${cfc_signature_right_people == 3 ? `   
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${full_name_additional_signatory_one ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${full_name_additional_signatory_one}`}</span>` : ''}
                                            ${full_name_additional_signatory_two ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${full_name_additional_signatory_two}`}</span>` : ''}
                                            ${full_name_additional_signatory_three ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${full_name_additional_signatory_three}`}</span>` : ''}   
                                         </td>
                                         ` : ''}
                                         ${cfc_signature_right_people == 4 ? `   
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${full_name_additional_signatory_one ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${full_name_additional_signatory_one}`}</span>` : ''}
                                            ${full_name_additional_signatory_two ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${full_name_additional_signatory_two}`}</span>` : ''}
                                            ${full_name_additional_signatory_three ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${full_name_additional_signatory_three}`}</span>` : ''}   
                                            ${full_name_additional_signatory_four ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${full_name_additional_signatory_four}`}</span>` : ''}
                                         </td>
                                         ` : ''}
                                         ${cfc_signature_right_people == 5 ? `   
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${full_name_additional_signatory_one ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${full_name_additional_signatory_one}`}</span>` : ''}
                                            ${full_name_additional_signatory_two ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${full_name_additional_signatory_two}`}</span>` : ''}
                                            ${full_name_additional_signatory_three ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${full_name_additional_signatory_three}`}</span>` : ''}   
                                            ${full_name_additional_signatory_four ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${full_name_additional_signatory_four}`}</span>` : ''}
                                            ${full_name_additional_signatory_five ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${full_name_additional_signatory_five}`}</span>` : ''}
                                         </td>
                                         ` : ''}
                                      </tr>
                                      <tr style="background-color: #f1f3f7;">
                                         <td style="border-bottom: 1px solid #000000; border-right: 1px solid #000000;
                                            border-left: 1px solid #000000; font-weight: 600;font-size: 13px; padding: 8px; vertical-align: middle; "
                                            colspan="6">(9) Corporate Account
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Name of the company:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${name_of_company ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${name_of_company}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;">Type of company:</span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${kind_of_company ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${kind_of_company}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Names of beneficial owners of the account:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${names_beneficial_owners ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${names_beneficial_owners}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;">Names of directors of the company:</span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${names_directors_company ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${names_directors_company}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Name of the settlor of the trust/foundation:</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${names_settlor_trust_foundation ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${names_settlor_trust_foundation}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;"></span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            <span style="display: block; font-size: 13px; vertical-align: middle;"></span>
                                         </td>
                                      </tr>
                                      <tr style="background-color: #f1f3f7;">
                                         <td style="border-bottom: 1px solid #000000; border-right: 1px solid #000000;
                                            border-left: 1px solid #000000; font-weight: 600;font-size: 13px; padding: 8px; vertical-align: middle; "
                                            colspan="6">(10) Services
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Do you wish to be introduced to the desired Bank?</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${desired_bank_any_bank_particular ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${desired_bank_any_bank_particular}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;">Do you wish to be introduced to an independent wealth manager?</span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            ${potential_independent_wealth_manager ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${potential_independent_wealth_manager}`}</span>` : ''}
                                         </td>
                                      </tr>
                                      <tr>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px;vertical-align: middle;">
                                            <span style="display: block;font-size: 13px;">Email confirmation</span>
                                         </td>
                                         <td width="25%"  style="border-bottom: 1px solid #000000; border-right: 1px solid #000; padding: 8px;">
                                            ${confirm_email ? `<span style="display: block; font-size: 13px; vertical-align: middle;">
                                            ${`${confirm_email}`}</span>` : ''}
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000;border-right: 1px solid #000;
                                            border-left: 1px solid #000; padding: 8px; vertical-align: middle;">
                                            <span style="display: block; font-size: 13px;"></span>
                                         </td>
                                         <td width="25%" style="border-bottom: 1px solid #000000; padding: 8px; border-right: 1px solid #000;">
                                            <span style="display: block; font-size: 13px; vertical-align: middle;"></span>
                                         </td>
                                      </tr>
                                   </tbody>
                                </table>
                             </td>
                          </tr>
                       </tbody>
                    </table>
                 </td>
              </tr>
           </tbody>
        </table>
     </body>
  </html> `

}
