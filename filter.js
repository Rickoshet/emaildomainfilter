<script src='d3.js'>
	</script>

const list = ['yahoo.com','bellsouth.net', 'sbcglobal.net', 'charter.net', 'optonline.net', 'mail.com',
							'email.com', 'cox.net', 'ymail.com', 'mchsi.com', 'usa.com', 'pacbell.net' //Новые домены пихать сюда через запятую в виде 'govno.ru'

						];




let container = d3.select("#container")

d3.csv('emails.csv').then(function(data){
	data.sort((a,b) => {
			return d3.ascending(a.domain, b.domain)
	})
	let filteredData = data.filter(d => list.includes(d.domain))


	showData(filteredData)
})




function write(text){
	container.append('div').text(text)
}


function showData(data){
	for (let login of data ){
	write(login.login
	+ '@'
	+ login.domain
	+ ':'
	+ login.password
)}}
