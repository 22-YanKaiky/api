class WelcomeMail {
	static welcome = async (email, password) => {
		return (
			`
			<!DOCTYPE html>

			<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
			
			<head>
				<title></title>
				<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
				<meta content="width=device-width, initial-scale=1.0" name="viewport" />
			
				<style>
					@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;500&family=Ubuntu:wght@300;500&display=swap');
			
					* {
						box-sizing: border-box;
					}
			
					body {
						margin: 0;
						padding: 0;
						font-family: 'Poppins', 'Ubuntu', Georgia, 'Times New Roman', Times, serif;
					}
			
					a[x-apple-data-detectors] {
						color: inherit !important;
						text-decoration: inherit !important;
					}
			
					#MessageViewBody a {
						color: inherit;
						text-decoration: none;
					}
			
					p {
						line-height: inherit
					}
			
					svg {
						height: 70%;
						width: 60%;
					}
			
					@media (max-width:620px) {
						.icons-inner {
							text-align: center;
						}
			
						.icons-inner td {
							margin: 0 auto;
						}
			
						.fullMobileWidth,
						.row-content {
							width: 100% !important;
						}
			
						.image_block img.big {
							width: auto !important;
						}
			
						.column .border {
							display: none;
						}
			
						table {
							table-layout: fixed !important;
						}
			
						.stack .column {
							width: 100%;
							display: block;
						}
					}
				</style>
			</head>
			
			<body style="background-color: #000; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
				<table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
					style="background-color: #000;" width="100%">
					<tbody>
						<tr>
							<td>
								<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation"
									style="background-color: #000;" width="100%">
									<tbody>
										<tr>
											<td>
												<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack"
													role="presentation" style="background-color: #000; color: #fff; width: 600px;" width="600">
													<tbody>
														<tr>
															<td class="column column-1"
																style="font-weight: 400; text-align: left; vertical-align: top; padding-top: 15px; padding-bottom: 15px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
																width="100%">
																<table border="0" cellpadding="0" cellspacing="0" class="menu_block" role="presentation"
																	width="100%">
																	<tr>
																		<td style="color:#FF0000;  font-size:13px; letter-spacing:2px; text-align:center;">
																			<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
																				<tr>
																					<td style="text-align:center;font-size:0px;">
																						<div class="menu-links">
																							<!--[if mso]>
						<table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style="">
						<tr>
						<td style="padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px">
						<![endif]--><a href="https://cinemovie-web.netlify.app/animes" target="_blank"
																								style="padding-top:5px;padding-bottom:5px;padding-left:5px;padding-right:5px;display:inline-block;color:#FF0000; font-size:13px;text-decoration:none;letter-spacing:2px; font-family: 'Ubuntu';">ANIMES</a>
																							<!--[if mso]></td><td><![endif]--><span class="sep"
																								style="font-size:13px; color:#fff;">|</span>
																							<!--[if mso]></td><![endif]-->
																							<!--[if mso]></td><td style="padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px"><![endif]--><a
																								href="https://cinemovie-web.netlify.app/movies" target="_blank"
																								style="padding-top:5px;padding-bottom:5px;padding-left:5px;padding-right:5px;display:inline-block;color:#FF0000; font-size:13px;text-decoration:none;letter-spacing:2px; font-family: 'Ubuntu';">MOVIES</a>
																							<!--[if mso]></td><td><![endif]--><span class="sep"
																								style="font-size:13px; color:#fff;">|</span>
																							<!--[if mso]></td><![endif]-->
																							<!--[if mso]></td><td style="padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px"><![endif]--><a
																								href="https://cinemovie-web.netlify.app/series" target="_blank"
																								style="padding-top:5px;padding-bottom:5px;padding-left:5px;padding-right:5px;display:inline-block;color:#FF0000; font-size:13px;text-decoration:none;letter-spacing:2px; font-family: 'Ubuntu';">SERIES</a>
																							<!--[if mso]></td><td><![endif]--><span class="sep"
																								style="font-size:13px; color:#fff;">|</span>
																							<!--[if mso]></td><![endif]-->
																							<!--[if mso]></td><td style="padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px"><![endif]--><a
																								href="https://cinemovie-web.netlify.app/news" target="_blank"
																								style="padding-top:5px;padding-bottom:5px;padding-left:5px;padding-right:5px;display:inline-block;color:#FF0000; font-size:13px;text-decoration:none;letter-spacing:2px; font-family: 'Ubuntu';">NEWS</a>
																							<!--[if mso]></td></tr></table><![endif]-->
																						</div>
																					</td>
																				</tr>
																			</table>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
								<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation"
									style="background-color: #000;" width="100%">
									<tbody>
										<tr>
											<td>
												<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack"
													role="presentation"
													style="background-color: #FF0000; color: #fff; width: 600px; border-radius: 10px 10px 0 0;"
													width="600">
													<tbody>
														<tr>
															<td class="column column-1"
																style="font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
																width="100%">
																<table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation"
																	width="100%">
																	<tr>
																		<td
																			style="width:100%;padding-right:0px;padding-left:0px;padding-top:20px;padding-bottom:20px;">
																			<div align="center" style="line-height:10px">
																				<a href="https://cinemovie-web.netlify.app/" target="_blank">
																					<img alt="Cinemovie"
																						src="https://cinemovie.s3.sa-east-1.amazonaws.com/cinemovie/cinemovie-white.png"
																						style="display: block; height: auto; border: 0; width: 250px; max-width: 100%;"
																						title="Cinemovie" width="150" />
																				</a>
																			</div>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
								<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation"
									style="background-color: #000;" width="100%">
									<tbody>
										<tr>
											<td>
												<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack"
													role="presentation" style="background-color: #000; color: #fff; width: 600px;" width="600">
													<tbody>
														<tr>
															<td class="column column-1"
																style="font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
																width="100%">
																<table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation"
																	width="100%">
																	<tr>
																		<td style="width:100%;padding-right:0px;padding-left:0px;">
																			<div align="center" style="line-height:10px"><img alt="Background Videos" class="big"
																					src="https://cinemovie.s3.sa-east-1.amazonaws.com/cinemovie/background-image.jpg"
																					style="display: block; height: auto; border: 0; width: 600px; max-width: 100%; border-radius: 0 0 10px 10px;"
																					title="Background Videos" width="600" /></div>
																		</td>
																	</tr>
																</table>
																<table border="0" cellpadding="0" cellspacing="0" class="heading_block" role="presentation"
																	width="100%">
																	<tr>
																		<td style="text-align:center;width:100%;padding-top:35px;">
																			<h1 style="margin: 0; color: #FF0000; direction: ltr; font-size: 50px; font-weight: normal; letter-spacing: 1px; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; font-family: 'Poppins';">
																				<strong>WELCOME</strong>
																			</h1>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
								<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation"
									style="background-color: #000;" width="100%">
									<tbody>
										<tr>
											<td>
												<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack"
													role="presentation" style="background-color: #000; color: #fff; width: 600px;" width="600">
													<tbody>
														<tr>
															<td class="column column-1"
																style="font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
																width="100%">
																<table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation"
																	style="word-break: break-word;" width="100%">
																	<tr>
																		<td style="padding-bottom:40px;padding-left:15px;padding-right:15px;padding-top:40px;">
																			<div>
																				<div class="txtTinyMce-wrapper" style="color: #d2cbcb; line-height: 1.5;">
																					<p
																						style="margin: 0; font-size: 20px; text-align: start; font-family: 'Poppins'; font-weight: 500;">
																						<span><strong>Hey there,</strong></span>
																					</p>
																					<p style="margin: 0; font-size: 16px; text-align: start;">
																						<span style="font-size:16px;">
																							Thank you for your interest in our website,
																						</span>
																					</p>
			
																					<br />
			
																					<p>
																						<span style="font-size:16px;">
																							Your access:
																						</span>
																					</p>
			
																					<br />
			
																					<p>
																						<span style="font-size:16px;">
																							<strong>Email: </strong>${email}
																						</span>
																					</p>
			
																					<p>
																						<span style="font-size:16px;">
																							<strong>Password: </strong>${password}
																						</span>
																					</p>
																				</div>
																			</div>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
								<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation"
									style="background-color: #000;" width="100%">
									<tbody>
										<tr>
											<td>
												<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack"
													role="presentation" style="background-color: #000; color: #fff; width: 600px;" width="600">
													<tbody>
														<tr>
															<td class="column column-1"
																style="font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
																width="33.333333333333336%">
																<table border="0" cellpadding="5" cellspacing="0" class="image_block" role="presentation"
																	width="100%">
																	<tr>
																		<td>
																			<div align="center" style="line-height:10px"><img alt="Castlevania"
																					class="fullMobileWidth big"
																					src="https://cinemovie.s3.sa-east-1.amazonaws.com/cinemovie/castlevania.jpg"
																					style="display: block; height: auto; border: 0; border-radius: 8px; width: 190px; max-width: 100%;"
																					title="Castlevania" width="190" /></div>
																		</td>
																	</tr>
																</table>
															</td>
															<td class="column column-2"
																style="font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
																width="33.333333333333336%">
																<table border="0" cellpadding="5" cellspacing="0" class="image_block" role="presentation"
																	width="100%">
																	<tr>
																		<td>
																			<div align="center" style="line-height:10px"><img
																					alt="Spider-Man: Into The Spiderverse " class="fullMobileWidth big"
																					src="https://cinemovie.s3.sa-east-1.amazonaws.com/cinemovie/spider-man-into-the-spiderverse.jpg"
																					style="display: block; height: auto; border: 0; border-radius: 8px; width: 180px; max-width: 100%;"
																					title="Spider-Man: Into The Spiderverse" width="190" /></div>
																		</td>
																	</tr>
																</table>
															</td>
															<td class="column column-3"
																style="font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
																width="33.333333333333336%">
																<table border="0" cellpadding="5" cellspacing="0" class="image_block" role="presentation"
																	width="100%">
																	<tr>
																		<td>
																			<div align="center" style="line-height:10px"><img alt="The Last Kingdom"
																					class="fullMobileWidth big"
																					src="https://cinemovie.s3.sa-east-1.amazonaws.com/cinemovie/the-last-kingdom.jpg"
																					style="display: block; height: auto; border: 0; border-radius: 8px; width: 180px; max-width: 100%;"
																					title="The Last Kingdom" width="190" /></div>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
								<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation"
									style="background-color: #000;" width="100%">
									<tbody>
										<tr>
											<td>
												<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack"
													role="presentation" style="background-color: #000; color: #fff; width: 600px;" width="600">
													<tbody>
														<tr>
															<td class="column column-1"
																style="font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
																width="100%">
																<table border="0" cellpadding="0" cellspacing="0" class="heading_block" role="presentation"
																	width="100%">
																	<tr>
																		<td
																			style="padding-bottom:35px;padding-left:5px;padding-right:5px;padding-top:30px;text-align:center;width:100%;">
																			<h1
																				style="margin: 0; color: #FF0000; direction: ltr; font-size: 19px; font-weight: normal; letter-spacing: 1px; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;">
																				Have a coffee and watch <strong>#Nemonauta</strong></h1>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
								<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7" role="presentation"
									style="background-color: #000;" width="100%">
									<tbody>
										<tr>
											<td>
												<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack"
													role="presentation" style="background-color: #000; color: #fff; width: 600px;" width="600">
													<tbody>
														<tr>
															<td class="column column-1"
																style="font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
																width="100%">
																<table border="0" cellpadding="0" cellspacing="0" class="html_block" role="presentation"
																	style="word-break: break-word; word-wrap: break-word;" width="100%">
																	<tr>
																		<td>
																			<div align="center" style="text-align:center;">
																				<div style="height:30px;"> </div>
																			</div>
																		</td>
																	</tr>
																</table>
																<table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation"
																	width="100%">
																	<tr>
																		<td style="width:100%;padding-right:0px;padding-left:0px;">
																			<div align="center" style="line-height:10px">
																				<a href="https://cinemovie-web.netlify.app/" target="_blank">
																					<img alt="Cinemovie"
																						src="https://cinemovie.s3.sa-east-1.amazonaws.com/cinemovie/cinemovie.png"
																						style="display: block; height: auto; border: 0; width: 250px; max-width: 100%;"
																						title="Cinemovie" width="120" />
																				</a>
																			</div>
																		</td>
																	</tr>
																</table>
																<table border="0" cellpadding="0" cellspacing="0" class="html_block" role="presentation"
																	style="word-break: break-word; word-wrap: break-word;" width="100%">
																	<tr>
																		<td>
																			<div align="center" style="text-align:center;">
																				<div style="height:30px;"> </div>
																			</div>
																		</td>
																	</tr>
																</table>
																<table border="0" cellpadding="0" cellspacing="0" class="social_block" role="presentation"
																	width="100%">
																	<tr>
																		<td style="text-align:center;padding-right:0px;padding-left:0px;">
																			<table align="center" border="0" cellpadding="0" cellspacing="0" class="social-table"
																				role="presentation" width=" 168px">
																				<tr>
																					<td style="padding:0 5px 0 5px;">
																						<!-- LinkedIn -->
																						<a href="https://www.linkedin.com/in/yan-kaiky-augusto-dos-santos-652418186/"
																							target="_blank">
																							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
																								<!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
																								<path
																									d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
																									fill="#fff" />
																							</svg>
																						</a>
																					</td>
			
																					<td style="padding:0 5px 0 5px;">
																						<!-- GitHub -->
																						<a href="https://github.com/22-YanKaiky" target="_blank">
																							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
																								<!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
																								<path
																									d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
																									fill="#fff" />
																							</svg>
																						</a>
																					</td>
			
																					<td style="padding:0 5px 0 5px;">
																						<!-- Instagram -->
																						<a href="https://www.instagram.com/yank.a.s.12/" target="_blank">
																							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
																								<!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
																								<path
																									d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
																									fill="#fff" />
																							</svg>
																						</a>
																					</td>
			
																					<td style="padding:0 5px 0 5px;">
																						<!-- Facebook -->
																						<a href="https://www.facebook.com/yankaikyaugusto.dossantos" target="_blank">
																							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
																								<!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
																								<path
																									d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
																									fill="#fff" />
																							</svg>
																						</a>
																					</td>
																				</tr>
																			</table>
																		</td>
																	</tr>
																</table>
																<table border="0" cellpadding="0" cellspacing="0" class="html_block" role="presentation"
																	style="word-break: break-word; word-wrap: break-word;" width="100%">
																	<tr>
																		<td>
																			<div align="center" style="text-align:center;">
																				<div style="height:30px;"> </div>
																			</div>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
								<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8" role="presentation"
									style="background-color: #000; margin-bottom: 5px;" width="100%">
									<tbody>
										<tr>
											<td>
												<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack"
													role="presentation"
													style="background-color: #FF0000; color: #fff; width: 600px; border-radius: 8px;" width="600">
													<tbody>
														<tr>
															<td class="column column-1"
																style="font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
																width="100%">
																<table border="0" cellpadding="10" cellspacing="0" class="text_block" role="presentation"
																	style="word-break: break-word;" width="100%">
																	<tr>
																		<td>
																			<div>
																				<div class="txtTinyMce-wrapper"
																					style="color: #fff; line-height: 1.2; display: flex; justify-content: center; flex-direction: column;">
																					<small style="margin: 0; text-align: center;">© Copyright 2022. Cinemovie All Rights
																						Reserved.</small>
			
																					<br />
			
																					<small style="margin: 0; text-align: center;">
																						<a href="http://www.example.com/" rel="noopener" style="color: #0055ff;"
																							target="_blank" title="http://www.example.com">Unsubscribe</a>
																					</small>
																				</div>
																			</div>
																		</td>
																	</tr>
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
			
			</html>
			`
		)
	}
}

module.exports = WelcomeMail;
