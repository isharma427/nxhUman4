Reports = React.createClass({

	componentDidMount(){
		if(Session.get("animateChild")){
			$(".reports-page").addClass("ng-enter");
			setTimeout(function(){
				$(".reports-page").addClass("ng-enter-active");
			}, 300);
			setTimeout(function(){
				$(".reports-page").removeClass("ng-enter");
				$(".reports-page").removeClass("ng-enter-active");
			}, 600);
		}
	},
  render: function() {
    return (
		<div className="dialogue">
			<div key="dialogue" className="reports-page ui-view main">
				<div className="ng-scope"> 
					<a href="/dashboard/overview" className="pull-right btn btn-primary btn-outline btn-rounded">Back to Background</a> 
					<h2>Patient Chart <small></small></h2> 

					<i className="fa fa-dashboard bg-fade"></i>
					<div className="jumbotron"> 
						<h1>Add Patient Chart here</h1> 
			
						<p> <a className="btn btn-primary btn-lg btn-outline btn-rounded">Submit</a> </p> 
					</div> 
				</div>
			</div>
		</div>
	);
  }
});