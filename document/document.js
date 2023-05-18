
module.exports = ({
investment_commercial_acc
,personal_corporate_acc
,signatory_acc
,signature_right
,bank_account_country
,bank_account_country_other_optional
,particular_bank
,firstname
,lastname
,dob
,nationality
,address
,CityOfResidence
,MaritalStatus
,email
,phone
,partner_spouse
,name_age_children
,father
,mother
,siblings
,study
,graduate
,profession
,cfc_studies
,cfc_studies_from_year
,cfc_studies_to_year
,cfc_studies_title
,actual_employer
,employer_title
,business_nature
,business_headquarter_country
,business_headquarter_city
,employment_start_date
,company_website
,share_of_company
,approximate_turnover_company
,approx_employees
,approx_value_of_company
,worked_before
,before_from_year
,before_to_year
,before_company_name
,before_work_title
,before_work_compensation_per_year
,political_exposed_person
,cfc_signature_right
,cfc_signature_right_people
,cfc_signature_right_name
,cfc_signature_right_relation
,cfc_signatories_beneficial_owners
,cfc_signatories_beneficial_owners_name
,cfc_signatories_beneficial_owners_relation
,amount_in_usd
,amount_in_usd_source
,financial_worth_in_usd
,assets_type
,assets_country
,assets_city
,assets_approx_value
,name_of_bank
,bankable_assets_approx_amount
,source_of_wealth
,source_of_wealth_amount
,investment_objective
,risk_tolerance
,investment_experience
,investment
,investment_knowledge
,cfc_open_corporate_account
,cfc_open_corporate_account_name_company
,cfc_open_corporate_account_jurisdiction_company
,cfc_open_corporate_account_type_company
,cfc_open_corporate_account_beneficial_owners
,cfc_open_corporate_account_beneficial_owners_firstname
,cfc_open_corporate_account_beneficial_owners_lastname
,cfc_open_corporate_account_beneficial_owners_nationality
,cfc_open_corporate_account_beneficial_owners_dob
,cfc_open_corporate_account_beneficial_owners_CityOfResidence
,cfc_open_corporate_account_beneficial_owners_Relation_each_other
,cfc_open_corporate_account_directors
,cfc_open_corporate_account_directors_firstname
,cfc_open_corporate_account_directors_lastname
,cfc_open_corporate_account_directors_nationality
,cfc_open_corporate_account_directors_dob
,cfc_open_corporate_account_directors_CityOfResidence
,cfc_open_corporate_account_directors_Relation_each_other
,cfc_open_corporate_account_settlor
,cfc_open_corporate_account_settlor_firstname
,cfc_open_corporate_account_settlor_lastname
,cfc_open_corporate_account_settlor_nationality
,cfc_open_corporate_account_settlor_dob
,cfc_open_corporate_account_settlor_CityOfResidence
,cfc_open_corporate_account_settlor_Relation_each_other
,approx_amount_transfer_new_bank_account
,send_fund_from_bank_name
,send_fund_from_bank_country
,transfers_intend_to_do_every_year
,transfers_intend_to_receive_every_year
,confirm_information_provided
,understand_information_provided
,confirm_email

    
})=>{
  const today = new Date()
  return `
  <!DOCTYPE html
	PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
	xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
	<!--[if gte mso 9]>
	<xml>
		<o:OfficeDocumentSettings>
		<o:AllowPNG/>
		<o:PixelsPerInch>96</o:PixelsPerInch>
		</o:OfficeDocumentSettings>
	</xml>
	<![endif]-->
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="format-detection" content="date=no" />
	<meta name="format-detection" content="address=no" />
	<meta name="format-detection" content="telephone=no" />
	<meta name="x-apple-disable-message-reformatting" />
	<title>Email Template</title>
	<!--[if gte mso 9]>
	<style type="text/css" media="all">
		sup { font-size: 100% !important; }
	</style>
	<![endif]-->


	<style type="text/css" media="screen">
		/* Linked Styles */
		body {
			min-width: 650px;
			padding: 0 !important;
			margin: 0 !important;
			display: block !important;
			width: 100% !important;
			background: #fff;
			-webkit-text-size-adjust: none
		}

		a {
			color: #e25479;
			text-decoration: none
		}

		p {
			padding: 0 !important;
			margin: 0 !important
		}

		.text-top a {
			color: #888888;
			text-decoration: none;
		}

		.text-footer a {
			color: #ffffff;
			text-decoration: underline;
		}

		/* Mobile styles */
		@media only screen and (max-device-width: 480px),
		only screen and (max-width: 480px) {
			.td {
				width: 100% !important;
				min-width: 100% !important;
			}

			.mobile-br-5 {
				height: 5px !important;
			}

			.mobile-br-10 {
				height: 10px !important;
			}

			.mobile-br-15 {
				height: 15px !important;
			}

			.mobile-br-30 {
				height: 30px !important;
			}

			.mobile-15 {
				padding-bottom: 15px !important;
			}

			.mobile-30 {
				padding-bottom: 30px !important;
			}

			.mobile-40 {
				padding-bottom: 40px !important;
			}

			.top-bar {
				padding: 0px 10px 0px 10px !important;
			}

			.section {
				padding: 0px 20px 30px 20px !important;
			}

			.section2 {
				padding: 40px 20px 40px 20px !important;
			}

			.section4 {
				padding: 40px 20px 0px 20px !important;
			}

			.footer {
				padding: 15px 20px 40px 20px !important;
			}

			.separator,
			.section-outer {
				padding: 0px 20px 0px 20px !important;
			}

			.m-td,
			.hide-for-mobile {
				display: none !important;
				width: 0 !important;
				height: 0 !important;
				font-size: 0 !important;
				line-height: 0 !important;
				min-height: 0 !important;
			}

			.mobile-block {
				display: block !important;
			}

			.fluid-img img {
				width: 100% !important;
				height: auto !important;
				min-width: auto !important;
			}

			.mobile-shell {
				width: 100% !important;
			}

			.text-center2 {
				text-align: left !important;
			}

			.center {
				margin: 0 auto !important;
			}

			.img-m-center,
			.img-m-center2 {
				text-align: center !important;
			}

			.h2 {
				font-size: 22px !important;
				line-height: 27px !important;
			}

			.column,
			.column-top,
			.column-bottom,
			.column-dir {
				float: left !important;
				width: 100% !important;
				display: block !important;
			}

			.mobile-spacing2 {
				padding: 0 10px 0 10px !important;
			}

			.body {
				min-width: 100% !important;
			}
		}
	</style>
</head>

<body class="body"
	style="min-width:650px; padding:0 !important; margin:0 !important; display:block !important; width:100% !important; background:#fff; -webkit-text-size-adjust:none">

	<!-- Header -->
	<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#fff">
		<tr>
			<td align="center" valign="top">
				<!-- Logo + Navigation -->
				<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell" bgcolor="#fff">
					<tr>
						<td class="mobile-spacing2">
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<!-- Logo + Navigation -->
								<tr>
									<td style="padding:40px 23px 34px 23px;">
										<table width="100%" border="0" cellspacing="0" cellpadding="0">
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
																			border="0" width="185" alt="" /></a></div>
															</td>
														</tr>
													</table>
													<!-- END Logo -->
												</th>
											</tr>
										</table>
									</td>
								</tr>
								<!-- END Logo + Navigation -->
								<!-- Heading -->
								<tr>
									<td bgcolor="#ffffff" style="padding: 0px 20px 18px 20px;">
										<div class="h2"
											style="color:#000000; font-family:Arial; font-weight: 600; font-size:16px; line-height:34px; text-align:left">
											<span class="mobile-block"></span>Client Profile (KCY)</div>
									</td>
								</tr>
								<!-- END Heading -->
							</table>
						</td>
					</tr>
				</table>
				<!-- END Logo + Navigation -->
			</td>
		</tr>
	</table>
	<!-- END Header -->

	<!-- Container -->
	<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#fff">
		<tr>
			<td class="mobile-spacing2">
				<!-- Heading -->
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td align="center" valign="top">
							<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
								bgcolor="#ffffff">
								<tr>
									<td class="section"
										style="padding:0px 23px 0px 23px;">
										<table width="100%" border="0" cellspacing="0" cellpadding="1">
											<tr>
												<td style="padding-bottom: 20px;">
													<div class="text-center2"
														style="color:#000000;font-weight: 600; font-family:Arial; font-size:14px; line-height:24px; text-align:left">
														(1). Customer / Contracting Partner (please provide a passport
														copy and utility bill as well)</div>
												</td>
											</tr>
											<!-- End Hero Copy -->
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<!-- Heading -->

				<!-- Article Image Right -->
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td align="center" valign="top">
							<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
								bgcolor="#fbfbfb">
								<tr>
									<td class="section2" style="padding:0px 23px 0px 23px">
										<!-- Article -->
										<table width="100%" border="0" cellspacing="0" cellpadding="0" dir="rtl"
											style="direction: rtl;">
											<tr>
												<th class="column-dir"
													style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; direction:ltr; Margin:0"
													dir="ltr" width="320">
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<td style="padding-bottom: 14px;"width="20%">
																<table width="100%" border="0" cellspacing="0"cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 14px;">
																			<div class="h3"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:25px; text-align:left; font-weight:normal">
																				Company Name:</div>
																		</td>
																	</tr>
																</table>
															</td>
															<td style="padding-bottom: 14px;" width="80%">
																<table width="100%" border="0" cellspacing="0"cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 14px;">
																			<div class="h3"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:25px; text-align:left; font-weight:normal">
																				${cfc_open_corporate_account_name_company ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_open_corporate_account_name_company}`}</p>
																				  </span>` : ''}</div>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
														<tr>
															<td style="padding-bottom: 14px;"width="20%">
																<table width="100%" border="0" cellspacing="0"cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 14px;">
																			<div class="h3"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:25px; text-align:left; font-weight:normal">
																				Directors:</div>
																		</td>
																	</tr>
																</table>
															</td>
															<td style="padding-bottom: 14px;" width="80%">
																<table width="100%" border="0" cellspacing="0"cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 14px;">
																			<div class="h3"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:25px; text-align:left; font-weight:normal">
																				${cfc_open_corporate_account_directors_firstname ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_open_corporate_account_directors_firstname},
																					  ${cfc_open_corporate_account_directors_lastname},
																					  ${cfc_open_corporate_account_directors_nationality},
																					  ${cfc_open_corporate_account_directors_dob},
																					  ${cfc_open_corporate_account_directors_CityOfResidence},
																					  ${cfc_open_corporate_account_directors_Relation_each_other}`}</p>
																				  </span>` : ''}</div>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
														<tr>
															<td style="padding-bottom: 14px;"width="20%">
																<table width="100%" border="0" cellspacing="0"cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 14px;">
																			<div class="h3"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:25px; text-align:left; font-weight:normal">
																				Beneficial owners:</div>
																		</td>
																	</tr>
																</table>
															</td>
															<td style="padding-bottom: 14px;" width="80%">
																<table width="100%" border="0" cellspacing="0"cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 14px;">
																			<div class="h3"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:25px; text-align:left; font-weight:normal">
																				${cfc_open_corporate_account_beneficial_owners_firstname ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_open_corporate_account_beneficial_owners_firstname},
																					  ${cfc_open_corporate_account_settlor_lastname},
																					  ${cfc_open_corporate_account_beneficial_owners_nationality},
																					  ${cfc_open_corporate_account_beneficial_owners_dob},
																					  ${cfc_open_corporate_account_beneficial_owners_CityOfResidence},
																					  ${cfc_open_corporate_account_beneficial_owners_Relation_each_other}`}</p>
																				  </span>` : ''}</div>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
														<tr>
															<td style="padding-bottom: 14px;"width="20%">
																<table width="100%" border="0" cellspacing="0"cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 14px;">
																			<div class="h3"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:25px; text-align:left; font-weight:normal">
																				Settlor:</div>
																		</td>
																	</tr>
																</table>
															</td>
															<td style="padding-bottom: 14px;" width="80%">
																<table width="100%" border="0" cellspacing="0"cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 14px;">
																			<div class="h3"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:25px; text-align:left; font-weight:normal">
																				${cfc_open_corporate_account_settlor_firstname ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_open_corporate_account_settlor_firstname},
																					  ${cfc_open_corporate_account_settlor_lastname},
																					  ${cfc_open_corporate_account_settlor_nationality},
																					  ${cfc_open_corporate_account_settlor_dob},
																					  ${cfc_open_corporate_account_settlor_CityOfResidence},
																					  ${cfc_open_corporate_account_settlor_Relation_each_other}`}</p>
																				  </span>` : ''}</div>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</th>
											</tr>
										</table>
										<!-- END Article -->
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<!-- END Article Image Right -->

				<!-- Heading -->
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td align="center" valign="top">
							<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
								bgcolor="#ffffff">
								<tr>
									<td class="section"
										style="padding:0px 23px 0px 23px;">
										<table width="100%" border="0" cellspacing="0" cellpadding="1">
											<tr>
												<td style="padding-bottom: 20px;">
													<div class="text-center2"
														style="color:#000000; font-weight: 600; font-family:Arial; font-size:14px; line-height:24px; text-align:left">
														Corporate account</div>
												</td>
											</tr>
											<!-- End Hero Copy -->
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<!-- Heading -->

				

				<!-- Three Columns -->
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td align="center" valign="top">
							<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
								bgcolor="#ffffff">
								<tr>
									<td>
										<!-- Columns -->
										<table width="100%" border="0" cellspacing="0" cellpadding="0">
											<tr>
												<td class="section2" style="padding:0px 23px 40px 23px">
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																				Name of company:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${cfc_open_corporate_account_name_company ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_open_corporate_account_name_company}`}</p>
																				  </span>` : ''}</div>
																		</td>
																	</tr>
																</table>
															</th>
															<th class="m-td"
																style="font-size:0pt; line-height:0pt; text-align:left"
																width="22"></th>
																<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																				Jurisdiction of company:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${cfc_open_corporate_account_jurisdiction_company ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_open_corporate_account_jurisdiction_company}`}</p>
																				  </span>` : ''}</div> 
																		</td>
																	</tr>
																</table>
															</th>
														</tr>
														<tr>
															<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																				Type of company:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${cfc_open_corporate_account_type_company ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_open_corporate_account_type_company}`}</p>
																				  </span>` : ''}</div>
																		</td>
																	</tr>
																</table>
															</th>
														</tr>
													</table>
												</td>
											</tr>
										</table>
										<!-- END Columns -->
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<!-- END Three Columns -->

				<!-- Heading -->
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td align="center" valign="top">
							<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
								bgcolor="#ffffff">
								<tr>
									<td class="section"
										style="padding:0px 23px 0px 23px;">
										<table width="100%" border="0" cellspacing="0" cellpadding="1">
											<tr>
												<td style="padding-bottom: 20px;">
													<div class="text-center2"
														style="color:#000000; font-weight: 600; font-family:Arial; font-size:14px; line-height:24px; text-align:left">
														Beneficial owners</div>
												</td>
											</tr>
											<!-- End Hero Copy -->
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<!-- Heading -->

				<!-- Three Columns -->
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td align="center" valign="top">
							<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
								bgcolor="#ffffff">
								<tr>
									<td>
										<!-- Columns -->
										<table width="100%" border="0" cellspacing="0" cellpadding="0">
											<tr>
												<td class="section2" style="padding:0px 23px 40px 23px">
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																				First Name:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${cfc_open_corporate_account_beneficial_owners_firstname ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_open_corporate_account_beneficial_owners_firstname}`}</p>
																				  </span>` : ''}</div>
																		</td>
																	</tr>
																</table>
															</th>
															<th class="m-td"
																style="font-size:0pt; line-height:0pt; text-align:left"
																width="22"></th>
																<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																				Last Name:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${cfc_open_corporate_account_beneficial_owners_lastname ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_open_corporate_account_beneficial_owners_lastname}`}</p>
																				  </span>` : ''}</div> 
																		</td>
																	</tr>
																</table>
															</th>
														</tr>
														<tr>
															<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																				Nationality:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${cfc_open_corporate_account_beneficial_owners_nationality ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_open_corporate_account_beneficial_owners_nationality}`}</p>
																				  </span>` : ''}</div>
																		</td>
																	</tr>
																</table>
															</th>
															<th class="m-td"
																style="font-size:0pt; line-height:0pt; text-align:left"
																width="22"></th>
																<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																				Date of birth:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${cfc_open_corporate_account_beneficial_owners_dob ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_open_corporate_account_beneficial_owners_dob}`}</p>
																				  </span>` : ''}</div> 
																		</td>
																	</tr>
																</table>
															</th>
														</tr>
														<tr>
															<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																				Country and city of residence:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${cfc_open_corporate_account_beneficial_owners_CityOfResidence ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_open_corporate_account_beneficial_owners_CityOfResidence}`}</p>
																				  </span>` : ''}</div>
																		</td>
																	</tr>
																</table>
															</th>
															<th class="m-td"
																style="font-size:0pt; line-height:0pt; text-align:left"
																width="22"></th>
																<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																				Relation to each other:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${cfc_open_corporate_account_beneficial_owners_Relation_each_other ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_open_corporate_account_beneficial_owners_Relation_each_other}`}</p>
																				  </span>` : ''}</div> 
																		</td>
																	</tr>
																</table>
															</th>
														</tr>
													</table>
												</td>
											</tr>
										</table>
										<!-- END Columns -->
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<!-- END Three Columns -->
				
				<!-- Heading -->
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td align="center" valign="top">
							<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
								bgcolor="#ffffff">
								<tr>
									<td class="section"
										style="padding:0px 23px 0px 23px;">
										<table width="100%" border="0" cellspacing="0" cellpadding="1">
											<tr>
												<td style="padding-bottom: 20px;">
													<div class="text-center2"
														style="color:#000000; font-weight: 600; font-family:Arial; font-size:14px; line-height:24px; text-align:left">
														Directors</div>
												</td>
											</tr>
											<!-- End Hero Copy -->
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<!-- Heading -->

				<!-- Three Columns -->
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td align="center" valign="top">
							<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
								bgcolor="#ffffff">
								<tr>
									<td>
										<!-- Columns -->
										<table width="100%" border="0" cellspacing="0" cellpadding="0">
											<tr>
												<td class="section2" style="padding:0px 23px 40px 23px">
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																				First Name:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${cfc_open_corporate_account_directors_firstname ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_open_corporate_account_directors_firstname}`}</p>
																				  </span>` : ''}</div>
																		</td>
																	</tr>
																</table>
															</th>
															<th class="m-td"
																style="font-size:0pt; line-height:0pt; text-align:left"
																width="22"></th>
																<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																				Last Name:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${cfc_open_corporate_account_directors_lastname ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_open_corporate_account_directors_lastname}`}</p>
																				  </span>` : ''}</div> 
																		</td>
																	</tr>
																</table>
															</th>
														</tr>
														<tr>
															<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																				Nationality:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${cfc_open_corporate_account_directors_nationality ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_open_corporate_account_directors_nationality}`}</p>
																				  </span>` : ''}</div>
																		</td>
																	</tr>
																</table>
															</th>
															<th class="m-td"
																style="font-size:0pt; line-height:0pt; text-align:left"
																width="22"></th>
																<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																				Date of birth:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${cfc_open_corporate_account_directors_dob ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_open_corporate_account_directors_dob}`}</p>
																				  </span>` : ''}</div> 
																		</td>
																	</tr>
																</table>
															</th>
														</tr>
														<tr>
															<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																				Country and city of residence:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${cfc_open_corporate_account_directors_CityOfResidence ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_open_corporate_account_directors_CityOfResidence}`}</p>
																				  </span>` : ''}</div>
																		</td>
																	</tr>
																</table>
															</th>
															<th class="m-td"
																style="font-size:0pt; line-height:0pt; text-align:left"
																width="22"></th>
																<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																				Relation to each other:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${cfc_open_corporate_account_directors_Relation_each_other ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_open_corporate_account_directors_Relation_each_other}`}</p>
																				  </span>` : ''}</div> 
																		</td>
																	</tr>
																</table>
															</th>
														</tr>
													</table>
												</td>
											</tr>
										</table>
										<!-- END Columns -->
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<!-- END Three Columns -->

				<!-- Heading -->
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td align="center" valign="top">
							<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
								bgcolor="#ffffff">
								<tr>
									<td class="section"
										style="padding:0px 23px 0px 23px;">
										<table width="100%" border="0" cellspacing="0" cellpadding="1">
											<tr>
												<td style="padding-bottom: 20px;">
													<div class="text-center2"
														style="color:#000000; font-weight: 600; font-family:Arial; font-size:14px; line-height:24px; text-align:left">
														Settlor</div>
												</td>
											</tr>
											<!-- End Hero Copy -->
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<!-- Heading -->

				<!-- Three Columns -->
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td align="center" valign="top">
							<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
								bgcolor="#ffffff">
								<tr>
									<td>
										<!-- Columns -->
										<table width="100%" border="0" cellspacing="0" cellpadding="0">
											<tr>
												<td class="section2" style="padding:0px 23px 40px 23px">
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																				First Name:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${cfc_open_corporate_account_settlor_firstname ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_open_corporate_account_settlor_firstname}`}</p>
																				  </span>` : ''}</div>
																		</td>
																	</tr>
																</table>
															</th>
															<th class="m-td"
																style="font-size:0pt; line-height:0pt; text-align:left"
																width="22"></th>
																<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																				Last Name:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${cfc_open_corporate_account_settlor_lastname ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_open_corporate_account_settlor_lastname}`}</p>
																				  </span>` : ''}</div> 
																		</td>
																	</tr>
																</table>
															</th>
														</tr>
														<tr>
															<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																				Nationality:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${cfc_open_corporate_account_settlor_nationality ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_open_corporate_account_settlor_nationality}`}</p>
																				  </span>` : ''}</div>
																		</td>
																	</tr>
																</table>
															</th>
															<th class="m-td"
																style="font-size:0pt; line-height:0pt; text-align:left"
																width="22"></th>
																<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																				Date of birth:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${cfc_open_corporate_account_settlor_dob ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_open_corporate_account_settlor_dob}`}</p>
																				  </span>` : ''}</div> 
																		</td>
																	</tr>
																</table>
															</th>
														</tr>
														<tr>
															<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																				Country and city of residence:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${cfc_open_corporate_account_settlor_CityOfResidence ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_open_corporate_account_settlor_CityOfResidence}`}</p>
																				  </span>` : ''}</div>
																		</td>
																	</tr>
																</table>
															</th>
															<th class="m-td"
																style="font-size:0pt; line-height:0pt; text-align:left"
																width="22"></th>
																<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																				Relation to each other:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${cfc_open_corporate_account_settlor_Relation_each_other ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_open_corporate_account_settlor_Relation_each_other}`}</p>
																				  </span>` : ''}</div> 
																		</td>
																	</tr>
																</table>
															</th>
														</tr>
													</table>
												</td>
											</tr>
										</table>
										<!-- END Columns -->
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<!-- END Three Columns -->
				

				<!-- Heading -->
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td align="center" valign="top">
							<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
								bgcolor="#ffffff">
								<tr>
									<td class="section"
										style="padding:0px 23px 0px 23px;">
										<table width="100%" border="0" cellspacing="0" cellpadding="1">
											<tr>
												<td style="padding-bottom: 20px;">
													<div class="text-center2"
														style="color:#000000; font-weight: 600; font-family:Arial; font-size:14px; line-height:24px; text-align:left">
														(2). General Details</div>
												</td>
											</tr>
											<!-- End Hero Copy -->
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<!-- Heading -->

				<!-- Three Columns -->
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td align="center" valign="top">
							<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
								bgcolor="#ffffff">
								<tr>
									<td>
										<!-- Columns -->
										<table width="100%" border="0" cellspacing="0" cellpadding="0">
											<tr>
												<td class="section2" style="padding:0px 23px 40px 23px">
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																				Open an Account:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${investment_commercial_acc ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${investment_commercial_acc}`}</p>
																				  </span>` : ''}</div>
																		</td>
																	</tr>
																</table>
															</th>
															<th class="m-td"
																style="font-size:0pt; line-height:0pt; text-align:left"
																width="22"></th>
																<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																				Open an Account:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${personal_corporate_acc ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${personal_corporate_acc}`}</p>
																				  </span>` : ''}</div> 
																		</td>
																	</tr>
																</table>
															</th>
														</tr>
														<tr>
															<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																				Are you a signatory of the account:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${signatory_acc ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${signatory_acc}`}</p>
																				  </span>` : ''}</div>
																		</td>
																	</tr>
																</table>
															</th>
															<th class="m-td"
																style="font-size:0pt; line-height:0pt; text-align:left"
																width="22"></th>
																<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																				Anybody else have signature right on the account:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${signature_right ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${signature_right}`}</p>
																				  </span>` : ''}</div> 
																		</td>
																	</tr>
																</table>
															</th>
														</tr>
														<tr>
															<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																				Open the Bank account:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${bank_account_country ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${bank_account_country}`}</p>
																				  </span>` : ''}</div>
																		</td>
																	</tr>
																</table>
															</th>
															<th class="m-td"
																style="font-size:0pt; line-height:0pt; text-align:left"
																width="22"></th>
																<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																				Prefer particular bank(s):</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${particular_bank ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${particular_bank}`}</p>
																				  </span>` : ''}</div> 
																		</td>
																	</tr>
																</table>
															</th>
														</tr>
														<tr>
															<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;" >
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																				Open Bank account Other Country:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${bank_account_country_other_optional ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${bank_account_country_other_optional}`}</p>
																				  </span>` : ''}</div>
																		</td>
																	</tr>
																</table>
															</th>
														</tr>
													</table>
												</td>
											</tr>
										</table>
										<!-- END Columns -->
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<!-- END Three Columns -->

				<!-- Heading -->
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td align="center" valign="top">
							<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
								bgcolor="#ffffff">
								<tr>
									<td class="section"
										style="padding:0px 23px 0px 23px;">
										<table width="100%" border="0" cellspacing="0" cellpadding="1">
											<tr>
												<td style="padding-bottom: 20px;">
													<div class="text-center2"
														style="color:#000000; font-weight: 600; font-family:Arial; font-size:14px; line-height:24px; text-align:left">
														(3).Personal Information</div>
												</td>
											</tr>
											<!-- End Hero Copy -->
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<!-- Heading -->

				<!-- Three Columns -->
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td align="center" valign="top">
							<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
								bgcolor="#ffffff">
								<tr>
									<td>
										<!-- Columns -->
										<table width="100%" border="0" cellspacing="0" cellpadding="0">
											<tr>
												<td class="section2" style="padding:0px 23px 40px 23px">
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																				First Name:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${firstname ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${firstname}`}</p>
																				  </span>` : ''}</div>
																		</td>
																	</tr>
																</table>
															</th>
															<th class="m-td"
																style="font-size:0pt; line-height:0pt; text-align:left"
																width="22"></th>
																<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																				Last Name:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${lastname ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${lastname}`}</p>
																				  </span>` : ''}</div> 
																		</td>
																	</tr>
																</table>
															</th>
														</tr>
														<tr>
															<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																				Date of Birth:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${dob ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${dob}`}</p>
																				  </span>` : ''}</div>
																		</td>
																	</tr>
																</table>
															</th>
															<th class="m-td"
																style="font-size:0pt; line-height:0pt; text-align:left"
																width="22"></th>
																<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																				Nationality:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${nationality ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${nationality}`}</p>
																				  </span>` : ''}</div> 
																		</td>
																	</tr>
																</table>
															</th>
														</tr>
														<tr>
															<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																				City Of Residence:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${CityOfResidence ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${CityOfResidence}`}</p>
																				  </span>` : ''}</div>
																		</td>
																	</tr>
																</table>
															</th>
															<th class="m-td"
																style="font-size:0pt; line-height:0pt; text-align:left"
																width="22"></th>
																<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																				Address:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${address ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${address}`}</p>
																				  </span>` : ''}</div> 
																		</td>
																	</tr>
																</table>
															</th>
														</tr>
														<tr>
															<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																				Email:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${email ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${email}`}</p>
																				  </span>` : ''}</div>
																		</td>
																	</tr>
																</table>
															</th>
															<th class="m-td"
																style="font-size:0pt; line-height:0pt; text-align:left"
																width="22"></th>
																<th width="180" class="column"
																style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0">
																	<tr>
																		<td style="padding-bottom: 18px;">
																			<div class="h3-center"
																				style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																				Contact Number:</div>
																		</td>
																		<td style="padding-bottom: 20px;">
																			<div class="text-center"
																				style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																				${phone ? `<span style="/* display: flex; */">
																					<p style=" border-bottom: 1px solid #eaeaea; ">${`${phone}`}</p>
																				  </span>` : ''}</div> 
																		</td>
																	</tr>
																</table>
															</th>
														</tr>
													</table>
												</td>
											</tr>
										</table>
										<!-- END Columns -->
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<!-- END Three Columns -->
				<!-- Heading -->
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td align="center" valign="top">
							<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
								bgcolor="#ffffff">
								<tr>
									<td class="section"
										style="padding:0px 23px 0px 23px;">
										<table width="100%" border="0" cellspacing="0" cellpadding="1">
											<tr>
												<td style="padding-bottom: 20px;">
													<div class="text-center2"
														style="color:#000000; font-weight: 600; font-family:Arial; font-size:14px; line-height:24px; text-align:left">
														(4).Educational Information</div>
												</td>
											</tr>
											<!-- End Hero Copy -->
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<!-- Heading -->


					<!-- Three Columns -->
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td align="center" valign="top">
								<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
									bgcolor="#ffffff">
									<tr>
										<td>
											<!-- Columns -->
											<table width="100%" border="0" cellspacing="0" cellpadding="0">
												<tr>
													<td class="section2" style="padding:0px 23px 40px 23px">
														<table width="100%" border="0" cellspacing="0" cellpadding="0">
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					Study:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${study ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${study}`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
																<th class="m-td"
																	style="font-size:0pt; line-height:0pt; text-align:left"
																	width="22"></th>
																	<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																					Graduate Year:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${graduate ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${graduate}`}</p>
																					  </span>` : ''}</div> 
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					Profession:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${profession ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${profession}`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
																<th class="m-td"
																	style="font-size:0pt; line-height:0pt; text-align:left"
																	width="22"></th>
																	<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																					From year:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${cfc_studies_from_year ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_studies_from_year}`}</p>
																					  </span>` : ''}</div> 
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					To year:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${cfc_studies_to_year ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_studies_to_year}`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
																<th class="m-td"
																	style="font-size:0pt; line-height:0pt; text-align:left"
																	width="22"></th>
																	<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																					Title:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${cfc_studies_title ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_studies_title}`}</p>
																					  </span>` : ''}</div> 
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
														</table>
													</td>
												</tr>
											</table>
											<!-- END Columns -->
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
					<!-- END Three Columns -->

					<!-- Heading -->
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td align="center" valign="top">
								<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
									bgcolor="#ffffff">
									<tr>
										<td class="section"
											style="padding:0px 23px 0px 23px;">
											<table width="100%" border="0" cellspacing="0" cellpadding="1">
												<tr>
													<td style="padding-bottom: 20px;">
														<div class="text-center2"
															style="color:#000000; font-weight: 600; font-family:Arial; font-size:14px; line-height:24px; text-align:left">
															(5).Family Situation ${`${firstname}`}</div>
													</td>
												</tr>
												<!-- End Hero Copy -->
											</table>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
					<!-- Heading -->


					<!-- Three Columns -->
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td align="center" valign="top">
								<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
									bgcolor="#ffffff">
									<tr>
										<td>
											<!-- Columns -->
											<table width="100%" border="0" cellspacing="0" cellpadding="0">
												<tr>
													<td class="section2" style="padding:0px 23px 40px 23px">
														<table width="100%" border="0" cellspacing="0" cellpadding="0">
															
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					Marital Status:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${MaritalStatus ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${MaritalStatus}`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
															<tr>
																<td style="padding-bottom: 20px;">
																	<div class="text-center2"
																		style="color:#000000; font-weight: 600; font-family:Arial; font-size:14px; line-height:24px; text-align:left">
																		Partner</div>
																</td>
															</tr>
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					Full Name:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${partner_spouse ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${partner_spouse}`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
															<tr>
																<td style="padding-bottom: 20px;">
																	<div class="text-center2"
																		style="color:#000000; font-weight: 600; font-family:Arial; font-size:14px; line-height:24px; text-align:left">
																		Child</div>
																</td>
															</tr>
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					Full Name with Age:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${name_age_children ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${name_age_children}`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
															<tr>
																<td style="padding-bottom: 20px;">
																	<div class="text-center2"
																		style="color:#000000; font-weight: 600; font-family:Arial; font-size:14px; line-height:24px; text-align:left">
																		Parents</div>
																</td>
															</tr>
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					Father:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${father ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${father}`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
																<th class="m-td"
																	style="font-size:0pt; line-height:0pt; text-align:left"
																	width="22"></th>
																	<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																					Mother:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${mother ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${mother}`}</p>
																					  </span>` : ''}</div> 
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
															<tr>
																<td style="padding-bottom: 20px;">
																	<div class="text-center2"
																		style="color:#000000; font-weight: 600; font-family:Arial; font-size:14px; line-height:24px; text-align:left">
																		Siblings</div>
																</td>
															</tr>
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					Sibling:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${siblings ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${siblings}`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
														</table>
													</td>
												</tr>
											</table>
											<!-- END Columns -->
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
					<!-- END Three Columns -->

					<!-- Heading -->
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td align="center" valign="top">
								<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
									bgcolor="#ffffff">
									<tr>
										<td class="section"
											style="padding:0px 23px 0px 23px;">
											<table width="100%" border="0" cellspacing="0" cellpadding="1">
												<tr>
													<td style="padding-bottom: 20px;">
														<div class="text-center2"
															style="color:#000000; font-weight: 600; font-family:Arial; font-size:14px; line-height:24px; text-align:left">
															(6). Professional Background ${`${firstname}`}</div>
													</td>
												</tr>
												<!-- End Hero Copy -->
											</table>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
					<!-- Heading -->

					<!-- Three Columns -->
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td align="center" valign="top">
								<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
									bgcolor="#ffffff">
									<tr>
										<td>
											<!-- Columns -->
											<table width="100%" border="0" cellspacing="0" cellpadding="0">
												<tr>
													<td class="section2" style="padding:0px 23px 40px 23px">
														<table width="100%" border="0" cellspacing="0" cellpadding="0">
															<tr>
																<td style="padding-bottom: 20px;">
																	<div class="text-center2"
																		style="color:#000000; font-weight: 600; font-family:Arial; font-size:14px; line-height:24px; text-align:left">
																		Occupational Status:</div>
																</td>
															</tr>
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					Name of actual Employer:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${actual_employer ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${actual_employer}`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
																<th class="m-td"
																	style="font-size:0pt; line-height:0pt; text-align:left"
																	width="22"></th>
																	<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																					Your title:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${employer_title ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${employer_title}`}</p>
																					  </span>` : ''}</div> 
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					Nature of your business:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${business_nature ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${business_nature}`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
																<th class="m-td"
																	style="font-size:0pt; line-height:0pt; text-align:left"
																	width="22"></th>
																	<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																					Business headquarter:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${business_headquarter_country ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${business_headquarter_country}`}</p>
																					  </span>` : ''}
																					  ${business_headquarter_city ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${business_headquarter_city}`}</p>
																					  </span>` : ''}</div> 
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					Employment Start Date:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${employment_start_date ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${employment_start_date}`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
																<th class="m-td"
																	style="font-size:0pt; line-height:0pt; text-align:left"
																	width="22"></th>
																	<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																					Website:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${company_website ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${company_website}`}</p>
																					  </span>` : ''}</div> 
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
															<tr>
																<td style="padding-bottom: 20px;">
																	<div class="text-center2"
																		style="color:#000000; font-weight: 600; font-family:Arial; font-size:14px; line-height:24px; text-align:left">
																		Shareholder:</div>
																</td>
															</tr>
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					Turnover p.a.:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${approximate_turnover_company ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${approximate_turnover_company}`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
																<th class="m-td"
																	style="font-size:0pt; line-height:0pt; text-align:left"
																	width="22"></th>
																	<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																					Number of employees:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${approx_employees ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${approx_employees}`}</p>
																					  </span>` : ''}</div> 
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					Share in the company:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${share_of_company ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${share_of_company}`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
																<th class="m-td"
																	style="font-size:0pt; line-height:0pt; text-align:left"
																	width="22"></th>
																	<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																					Approx value of the company:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${approx_value_of_company ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${approx_value_of_company}`}</p>
																					  </span>` : ''}</div> 
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
															<tr>
																<td style="padding-bottom: 20px;">
																	<div class="text-center2"
																		style="color:#000000; font-weight: 600; font-family:Arial; font-size:14px; line-height:24px; text-align:left">
																		Previous Occupations:</div>
																</td>
															</tr>
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					Work before:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${worked_before ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${worked_before}`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					From year:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${before_from_year ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${before_from_year}`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
																<th class="m-td"
																	style="font-size:0pt; line-height:0pt; text-align:left"
																	width="22"></th>
																	<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																					To year:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${before_to_year ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${before_to_year}`}</p>
																					  </span>` : ''}</div> 
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					Company name:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${before_company_name ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${before_company_name}`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
																<th class="m-td"
																	style="font-size:0pt; line-height:0pt; text-align:left"
																	width="22"></th>
																	<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																					Role:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${before_work_title ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${before_work_title}`}</p>
																					  </span>` : ''}</div> 
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					Compensation/year:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${before_work_compensation_per_year ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${before_work_compensation_per_year}`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
																<th class="m-td"
																	style="font-size:0pt; line-height:0pt; text-align:left"
																	width="22"></th>
																	<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																					PEP (political exposed person):</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${political_exposed_person ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${political_exposed_person}`}</p>
																					  </span>` : ''}</div> 
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
														</table>
													</td>
												</tr>
											</table>
											<!-- END Columns -->
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
					<!-- END Three Columns -->
					<!-- Heading -->
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td align="center" valign="top">
								<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
									bgcolor="#ffffff">
									<tr>
										<td class="section"
											style="padding:0px 23px 0px 23px;">
											<table width="100%" border="0" cellspacing="0" cellpadding="1">
												<tr>
													<td style="padding-bottom: 20px;">
														<div class="text-center2"
															style="color:#000000; font-weight: 600; font-family:Arial; font-size:14px; line-height:24px; text-align:left">
															(7).Joint signatory:</div>
													</td>
												</tr>
												<!-- End Hero Copy -->
											</table>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
					<!-- Heading -->
					<!-- Three Columns -->
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td align="center" valign="top">
								<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
									bgcolor="#ffffff">
									<tr>
										<td>
											<!-- Columns -->
											<table width="100%" border="0" cellspacing="0" cellpadding="0">
												<tr>
													<td class="section2" style="padding:0px 23px 40px 23px">
														<table width="100%" border="0" cellspacing="0" cellpadding="0">
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					People will have signatory rights:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${cfc_signature_right_people ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_signature_right_people}`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					Name of signatory:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${cfc_signature_right_name ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_signature_right_name}`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
																<th class="m-td"
																	style="font-size:0pt; line-height:0pt; text-align:left"
																	width="22"></th>
																	<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																					Relation to Joint signatory:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${cfc_signature_right_relation ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_signature_right_relation}`}</p>
																					  </span>` : ''}</div> 
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
															
															<tr>
																<td style="padding-bottom: 20px;">
																	<div class="text-center2"
																		style="color:#000000; font-weight: 600; font-family:Arial; font-size:14px; line-height:24px; text-align:left">
																		Signatories beneficial owners:</div>
																</td>
															</tr>
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					Name of signatories beneficial owners:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${cfc_signatories_beneficial_owners_name ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_signatories_beneficial_owners_name}`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
																<th class="m-td"
																	style="font-size:0pt; line-height:0pt; text-align:left"
																	width="22"></th>
																	<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																					Relation to signatories beneficial owners:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${cfc_signatories_beneficial_owners_relation  ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${cfc_signatories_beneficial_owners_relation }`}</p>
																					  </span>` : ''}</div> 
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
														</table>
													</td>
												</tr>
											</table>
											<!-- END Columns -->
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
					<!-- END Three Columns -->

					<!-- Heading -->
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td align="center" valign="top">
								<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
									bgcolor="#ffffff">
									<tr>
										<td class="section"
											style="padding:0px 23px 0px 23px;">
											<table width="100%" border="0" cellspacing="0" cellpadding="1">
												<tr>
													<td style="padding-bottom: 20px;">
														<div class="text-center2"
															style="color:#000000; font-weight: 600; font-family:Arial; font-size:14px; line-height:24px; text-align:left">
															(8).Financial Information::</div>
													</td>
												</tr>
												<!-- End Hero Copy -->
											</table>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
					<!-- Heading -->
					<!-- Three Columns -->
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td align="center" valign="top">
								<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
									bgcolor="#ffffff">
									<tr>
										<td>
											<!-- Columns -->
											<table width="100%" border="0" cellspacing="0" cellpadding="0">
												<tr>
													<td class="section2" style="padding:0px 23px 40px 23px">
														<table width="100%" border="0" cellspacing="0" cellpadding="0">
															
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					Avg Annual Income:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${amount_in_usd ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${amount_in_usd}`}</p>
																					  </span>` : ''}
																					  ${amount_in_usd_source  ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${amount_in_usd_source }`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
																<th class="m-td"
																	style="font-size:0pt; line-height:0pt; text-align:left"
																	width="22"></th>
																	<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																					Financial worth in USD::</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${financial_worth_in_usd  ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${financial_worth_in_usd }`}</p>
																					  </span>` : ''}</div> 
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
															
															<tr>
																<td style="padding-bottom: 20px;">
																	<div class="text-center2"
																		style="color:#000000; font-weight: 600; font-family:Arial; font-size:14px; line-height:24px; text-align:left">
																		Real estates:</div>
																</td>
															</tr>
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					Types:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${assets_type ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${assets_type}`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
																<th class="m-td"
																	style="font-size:0pt; line-height:0pt; text-align:left"
																	width="22"></th>
																	<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																					country:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${assets_country  ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${assets_country }`}</p>
																					  </span>` : ''}</div> 
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					City:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${assets_city ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${assets_city}`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
																<th class="m-td"
																	style="font-size:0pt; line-height:0pt; text-align:left"
																	width="22"></th>
																	<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																					Approximate value in USD:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${assets_approx_value  ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${assets_approx_value }`}</p>
																					  </span>` : ''}</div> 
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
															<tr>
																<td style="padding-bottom: 20px;">
																	<div class="text-center2"
																		style="color:#000000; font-weight: 600; font-family:Arial; font-size:14px; line-height:24px; text-align:left">
																		Bankable assets:</div>
																</td>
															</tr>
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					Name of bank:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${name_of_bank  ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${name_of_bank }`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
																<th class="m-td"
																	style="font-size:0pt; line-height:0pt; text-align:left"
																	width="22"></th>
																	<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																					Aprox. Amount in USD:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${bankable_assets_approx_amount  ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${bankable_assets_approx_amount }`}</p>
																					  </span>` : ''}</div> 
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					Source of your wealth:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${source_of_wealth ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${source_of_wealth}`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
																<th class="m-td"
																	style="font-size:0pt; line-height:0pt; text-align:left"
																	width="22"></th>
																	<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																					Source of your wealth amount in USD:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${source_of_wealth_amount  ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${source_of_wealth_amount }`}</p>
																					  </span>` : ''}</div> 
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
														</table>
													</td>
												</tr>
											</table>
											<!-- END Columns -->
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
					<!-- END Three Columns -->

					<!-- Heading -->
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td align="center" valign="top">
								<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
									bgcolor="#ffffff">
									<tr>
										<td class="section"
											style="padding:0px 23px 0px 23px;">
											<table width="100%" border="0" cellspacing="0" cellpadding="1">
												<tr>
													<td style="padding-bottom: 20px;">
														<div class="text-center2"
															style="color:#000000; font-weight: 600; font-family:Arial; font-size:14px; line-height:24px; text-align:left">
															(9).Investment Objectives and Risk Profile:</div>
													</td>
												</tr>
												<!-- End Hero Copy -->
											</table>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
					<!-- Heading -->
					<!-- Three Columns -->
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td align="center" valign="top">
								<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
									bgcolor="#ffffff">
									<tr>
										<td>
											<!-- Columns -->
											<table width="100%" border="0" cellspacing="0" cellpadding="0">
												<tr>
													<td class="section2" style="padding:0px 23px 40px 23px">
														<table width="100%" border="0" cellspacing="0" cellpadding="0">
															
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					Investment Objective:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${investment_objective ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${investment_objective}`}</p>
																					  </span>` : ''}
																					</div>
																			</td>
																		</tr>
																	</table>
																</th>
																<th class="m-td"
																	style="font-size:0pt; line-height:0pt; text-align:left"
																	width="22"></th>
																	<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																					Risk Tolerance:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${risk_tolerance   ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${risk_tolerance  }`}</p>
																					  </span>` : ''}</div> 
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					Investment Experience:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${investment_experience  ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${investment_experience }`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
																<th class="m-td"
																	style="font-size:0pt; line-height:0pt; text-align:left"
																	width="22"></th>
																	<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																					Investment Knowledge:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${investment_knowledge  ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${investment_knowledge }`}</p>
																					  </span>` : ''}</div> 
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
														</table>
													</td>
												</tr>
											</table>
											<!-- END Columns -->
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
					<!-- END Three Columns -->

					<!-- Heading -->
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td align="center" valign="top">
								<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
									bgcolor="#ffffff">
									<tr>
										<td class="section"
											style="padding:0px 23px 0px 23px;">
											<table width="100%" border="0" cellspacing="0" cellpadding="1">
												<tr>
													<td style="padding-bottom: 20px;">
														<div class="text-center2"
															style="color:#000000; font-weight: 600; font-family:Arial; font-size:14px; line-height:24px; text-align:left">
															(10).Account Details</div>
													</td>
												</tr>
												<!-- End Hero Copy -->
											</table>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
					<!-- Heading -->
					<!-- Three Columns -->
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td align="center" valign="top">
								<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
									bgcolor="#ffffff">
									<tr>
										<td>
											<!-- Columns -->
											<table width="100%" border="0" cellspacing="0" cellpadding="0">
												<tr>
													<td class="section2" style="padding:0px 23px 40px 23px">
														<table width="100%" border="0" cellspacing="0" cellpadding="0">
															
															<tr>
																	<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																					Amount to transfer to the new bank account:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${approx_amount_transfer_new_bank_account   ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${approx_amount_transfer_new_bank_account  }`}</p>
																					  </span>` : ''}</div> 
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					Name of bank:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${send_fund_from_bank_name   ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${send_fund_from_bank_name  }`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
																<th class="m-td"
																	style="font-size:0pt; line-height:0pt; text-align:left"
																	width="22"></th>
																	<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																					Country:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${send_fund_from_bank_country   ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${send_fund_from_bank_country  }`}</p>
																					  </span>` : ''}</div> 
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					Transfers you intend to do every year:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${transfers_intend_to_do_every_year   ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${transfers_intend_to_do_every_year  }`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
																<th class="m-td"
																	style="font-size:0pt; line-height:0pt; text-align:left"
																	width="22"></th>
																	<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																					Transfers you intend to receive every year:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${transfers_intend_to_receive_every_year   ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${transfers_intend_to_receive_every_year  }`}</p>
																					  </span>` : ''}</div> 
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
														</table>
													</td>
												</tr>
											</table>
											<!-- END Columns -->
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
					<!-- END Three Columns -->
					<!-- Heading -->
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td align="center" valign="top">
								<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
									bgcolor="#ffffff">
									<tr>
										<td class="section"
											style="padding:0px 23px 0px 23px;">
											<table width="100%" border="0" cellspacing="0" cellpadding="1">
												<tr>
													<td style="padding-bottom: 20px;">
														<div class="text-center2"
															style="color:#000000; font-weight: 600; font-family:Arial; font-size:14px; line-height:24px; text-align:left">
															(11).Conformation:</div>
													</td>
												</tr>
												<!-- End Hero Copy -->
											</table>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
					<!-- Heading -->
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td align="center" valign="top">
								<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell"
									bgcolor="#ffffff">
									<tr>
										<td>
											<!-- Columns -->
											<table width="100%" border="0" cellspacing="0" cellpadding="0">
												<tr>
													<td class="section2" style="padding:0px 23px 40px 23px">
														<table width="100%" border="0" cellspacing="0" cellpadding="0">
															
															<tr>
																	<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;" >
																					I confirm that the information provided:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${confirm_information_provided   ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${confirm_information_provided  }`}</p>
																					  </span>` : ''}</div> 
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					I understand that the information provided for KYC Purposes:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${understand_information_provided   ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${understand_information_provided  }`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
															<tr>
																<th width="180" class="column"
																	style="font-size:0pt; line-height:0pt; Margin:0; font-weight:normal; padding:0; margin:0; Magin:0"
																	valign="top">
																	<table width="100%" border="0" cellspacing="0"
																		cellpadding="0">
																		<tr>
																			<td style="padding-bottom: 18px;">
																				<div class="h3-center"
																					style="color:#000000; font-family:Arial; font-size:14px; line-height:20px; text-align:left;">
																					Email Confirmation:</div>
																			</td>
																			<td style="padding-bottom: 20px;">
																				<div class="text-center"
																					style="color:#888888; font-family:Arial; font-size:14px; line-height:24px; text-align:center">
																					${confirm_email   ? `<span style="/* display: flex; */">
																						<p style=" border-bottom: 1px solid #eaeaea; ">${`${confirm_email  }`}</p>
																					  </span>` : ''}</div>
																			</td>
																		</tr>
																	</table>
																</th>
															</tr>
														</table>
													</td>
												</tr>
											</table>
											<!-- END Columns -->
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
			</td>
		</tr>
	</table>
	<!-- END Container -->
</body>

</html>
  `

}