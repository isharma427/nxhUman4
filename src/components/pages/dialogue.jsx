Dialogue = React.createClass({

	componentDidMount(){
		if(Session.get("animateChild")){
			$(".dialogue-page").addClass("ng-enter");
			setTimeout(function(){
				$(".dialogue-page").addClass("ng-enter-active");
			}, 300);
			setTimeout(function(){
				$(".dialogue-page").removeClass("ng-enter");
				$(".dialogue-page").removeClass("ng-enter-active");
			}, 600);
		}
	},
  render: function() {
    return (
		<div className="dialogue">
			<div key="dialogue" className="dialogue-page ui-view main">
				<div className="ng-scope"> 
					<a href="/dashboard/reports" className="pull-right btn btn-primary btn-outline btn-rounded">Back to Patient Chart</a> 
					<h2>Dialogue<small></small></h2> 

					<i className="fa fa-dashboard bg-fade"></i>
					<div className="jumbotron"> 
						<h1>Add Dialogue here</h1> 
			
						<p> <a className="btn btn-primary btn-lg btn-outline btn-rounded">Submit</a> </p> 
					</div> 
				</div>
			</div>
		</div>
	);
  }
});