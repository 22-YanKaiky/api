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
																						<a href="https://www.linkedin.com/in/yan-kaiky-augusto-dos-santos-652418186/" target="_blank">
																							<img src="https://cinemovie.s3.sa-east-1.amazonaws.com/cinemovie/icon-linkedin.png" alt="Linkedin" width="20px">
																						</a>
																					</td>
			
																					<td style="padding:0 5px 0 5px;">
																						<!-- GitHub -->
																						<a href="https://github.com/YanKaiky" target="_blank">
																							<img src="https://cinemovie.s3.sa-east-1.amazonaws.com/cinemovie/icon-github.png" alt="GitHub" width="20px">
																						</a>
																					</td>
			
																					<td style="padding:0 5px 0 5px;">
																						<!-- Instagram -->
																						<a href="https://www.instagram.com/yank.a.s.12/" target="_blank">
																							<img src="https://cinemovie.s3.sa-east-1.amazonaws.com/cinemovie/icon-instagram.png" alt="Instagram" width="20px">
																						</a>
																					</td>
			
																					<td style="padding:0 5px 0 5px;">
																						<!-- Facebook -->
																						<a href="https://www.facebook.com/yankaikyaugusto.dossantos" target="_blank">
																							<img src="https://cinemovie.s3.sa-east-1.amazonaws.com/cinemovie/icon-facebook.png" alt="Facebook" width="20px">
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
