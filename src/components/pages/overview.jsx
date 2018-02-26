Overview = React.createClass({

	componentDidMount(){
		if(Session.get("animateChild")){
			$(".overview-page").addClass("ng-enter");
			setTimeout(function(){
				$(".overview-page").addClass("ng-enter-active");
			}, 300);
			setTimeout(function(){
				$(".overview-page").removeClass("ng-enter");
				$(".overview-page").removeClass("ng-enter-active");
			}, 600);
		}
	},

	render: function() {
	    return (
			<div className="overview">
				<div className="overview-page ui-view main" key="overview"> 
			        <a href="/dashboard/reports" className="pull-right btn btn-primary btn-outline btn-rounded">Reports</a> 
			        <h2>Background <small>Enter Patient Background Information here:</small></h2> 
			        <div className="jumbotron"> 
						<h1>Background</h1> Background information such as what disease/problem the patient has
						<br /><br /> 
						<p> <a className="btn btn-primary btn-lg btn-outline btn-rounded">Submit</a> </p> 
			        </div> 
			    </div>
			</div>
		);
	}
});