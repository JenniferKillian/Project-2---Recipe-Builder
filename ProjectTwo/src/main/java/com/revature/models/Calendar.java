package com.revature.models;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Table(name="Calendar")
public class Calendar {
	
	@Id
	@Column(name="calendar_id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int cId;
	
	@Column(name="user_id")
	private int uId;
	
	@Column(name="date")
	private Timestamp date;
	
	@ManyToMany
	 @JoinTable(
	            name = "date_recipe",
	            joinColumns = @JoinColumn(name = "calendar_id"),
	            inverseJoinColumns = @JoinColumn(name = "recipe_id")
	    )
	private List<Recipe> scheduledRecipes;
	
	public Calendar(int u_id, Timestamp date, List<Recipe> schRecipes) {
		super();
		this.uId = u_id;
		this.date = date;
		this.scheduledRecipes = schRecipes;
	}

}
