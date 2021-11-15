const url = `https://api.github.com/users`
const LinkSocialMedial = {
  //user: 'Guilherme T. Filgueiras',
  github: 'gtfilgueiras',
  youtube: 'gtfilgueiras',
  facebook: 'guilherme.toledo.96',
  instagram: 'gtfilgueiras',
  twitter: 'gtfilgueiras'
}
function changeLinkSocialMedial() {
  //nameUser.textContent = LinkSocialMedial.user
  //githubId.href = `https://www.github.com/${LinkSocialMedial.github}`

  for (let li of socialLinks.children) {
    const userid = li.getAttribute('class')
    li.children[0].href = `https://www.${userid}.com/${LinkSocialMedial[userid]}/`
    //alert(userid)
  }
  document.getElementById('nameUser').textContent = LinkSocialMedial.user
}
changeLinkSocialMedial()

function getGithubProfile() {
  const newurls = url + `/` + LinkSocialMedial.github

  fetch(newurls)
    .then(Response => Response.json())
    .then(data => {
      nameUser.textContent = data.name
      githubId.href = data.html_url
      descriptionBio.textContent = data.bio
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGithubProfile()
