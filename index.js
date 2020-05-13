class Driver {
	constructor(name, day) {
		this.name = name 
		this.startDate = new Date(day) 
	}


	yearsExperienceFromBeginningOf(year) {
		return year - this.startDate.getFullYear()
	}


}

	let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
]

class Route {
	constructor(beginningLocation, endingLocation) {
		this.beginningLocation = beginningLocation
		this.endingLocation = endingLocation
	}



	blocksTravelled() {
		let north_south = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical)
		let east_west = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal))
		return (north_south + east_west)
	}

	estimatedTime(peak) {
		if (peak) {
			return this.blocksTravelled()/2 
		} else {
			return this.blocksTravelled()/3
		}
	}
}


